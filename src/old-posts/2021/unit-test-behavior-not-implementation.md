---
layout: layouts/post-layout.njk
title: Unit test behavior, not implementation
date: 2021-08-12
tags: ['post']
---

I have been talking to my team lately about unit testing.

I was excited to find the opportunity to share a real-world example with my team that highlights one of the differences between effective and brittle unit tests.

<hr>

Hi all,

I was looking at some unit tests that were introduced in the UI Workflow codebase.

I think it’s fantastic that we’re starting to write unit tests, but the hardest part about writing unit tests in knowing what to test.  As a succinct message, I like “Test behavior, not implementation.”

I’m taking an example of CIS-4856.

You can see the behavior in the user story:

“As a Cashiering resource, I want payments made through Third Party PAP to have unique “invoice numbers” so that payments of the same amount for the same customer are not rejected as duplicates.

Here is some of the code that was written to solve the problem:

<pre><code>public class InvoiceCloudUtils {
  public static String generateInvoiceNumber(String accountNo, String occupantCode) {
           return generateInvoiceNumber(accountNo, occupantCode, new Date().getTime());
  }
  
  public static String generateInvoiceNumber(String accountNo, String occupantCode, long timestamp) {
           return String.format(&quot;IC%s-%s-%s&quot;, accountNo, occupantCode, timestamp);
  }
}
</code></pre>

Which is used here:

<pre><code>   soapElement12.addTextNode(“100”);
                    
   soapElement12.addTextNode(InvoiceCloudUtils.generateInvoiceNumber(detailsModel.getAccountNo(), detailsModel.getOccupantCode())); 
</code></pre>

The idea is that we can make the payment unique by setting the invoice number to a unique value.

Here is an example of unit testing implementation:

<pre><code>public class InvoiceCloudUtilsTests {

  @Test
  public void shouldGenerateInvoiceWithSameAccOcc()
  {
           String invoice = InvoiceCloudUtils.generateInvoiceNumber(&quot;1&quot;, &quot;1&quot;, 1623939740631L);
           assertEquals(invoice, &quot;IC1-1-1623939740631&quot;);
           
  }
  
  @Test
  public void shouldGenerateInvoice()
  {
           String invoice = InvoiceCloudUtils.generateInvoiceNumber(&quot;1&quot;, &quot;2&quot;, 1623939740631L);
           assertEquals(invoice, &quot;IC1-2-1623939740631&quot;);
           
  }
  
  @Test
  public void shouldGenerateInvoiceFromTime()
  {
           String invoice = InvoiceCloudUtils.generateInvoiceNumber(&quot;1&quot;, &quot;2&quot;);
           assertTrue(invoice.startsWith(&quot;IC1-2-&quot;));
  }
}
</code></pre>

These tests are testing the implementation of the 2 new methods that were added above to ensure they do what they’re supposed to do: spit out a string in the format “IC<account number>-<occupant code>-<timestamp>”.

Unit tests like this are brittle because if we want to modify the code to replace “IC” with “Invoice” or add another parameter like customer code instead of account number, all the tests will break and they’ll have to be rewritten.

In order to understand how to write unit tests that test the BEHAVIOR, I’ll revisit the behavior in the user story:

“As a Cashiering resource, I want payments made through Third Party PAP to have unique “invoice numbers” so that payments of the same amount for the same customer are not rejected as duplicates.”

Instead of testing HOW the invoice numbers are different, it makes sense to instead test THAT they are different.

There’s a method that bundles up the SOAP call to send to InvoiceCloud:

<pre><code>private SOAPMessage createSoapRequest(AccountDetailsModel detailsModel, String totalPayment, String convenienceFeeAmount, String token, String soapAction)
</code></pre>

This method should really be a public method, so that we can write unit tests against THAT method because it’s the core of the behavior (input is account and payment details, output is the exact message that will be sent to IC).

With that, we can write a unit test that if you create 2 SoapRequests one after the other, then the InvoiceNumber generated in each of these calls is a DIFFERENT invoice number, which is the behavior we want.  There’s probably some other unit tests that we could write too (I’m confused about the ‘same amount’ part of the user story because I don’t see it reflected in the code change, but that’s outside the scope of this unit test discussion).

Doing it this way frees us up to change the way we generate the invoice number, where that code lives, what the method is called, and what its arguments are, but the required behavior is still validated.

If you have any questions about this, please ping me.

Thanks,
-RG!
