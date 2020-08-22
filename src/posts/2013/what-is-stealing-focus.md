---
layout: layouts/post-layout.njk 
title: What is stealing focus?
date: 2013-11-11
tags: ['post', 'development']
---
For the last couple of days, <!-- Excerpt Start -->the focussed window on my dev box would occasionally lose focus.<!-- Excerpt End -->  It was really annoying.  It would always switch back, but I’d lose a couple letters here or there as I was typing.

I eventually found [the following code](https://archive.msdn.microsoft.com/templeofvb/Release/ProjectReleases.aspx?ReleaseId=18) that helped me track down the culprit:

```vb
Declare Auto Function GetForegroundWindow Lib "user32.dll" () As Integer
Declare Auto Function GetWindowThreadProcessId Lib "user32.dll" (ByVal hwnd As Integer, ByRef procid As Integer) As UInteger

    Private Sub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
        Me.RichTextBox1.AppendText("Starting up at " & Now & vbCrLf)
    End Sub

    Private Sub GoingAway(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Deactivate, Me.LostFocus

        Dim hwnd As Integer = GetForegroundWindow()
        ' Note that process_id will be used as a ByRef argument
        ' and will be changed by GetWindowThreadProcessId
        Dim process_id As Integer = 1
        GetWindowThreadProcessId(hwnd, process_id)

        If (process_id <> 1) Then
            Dim appExePath As String = Process.GetProcessById(process_id).MainModule.FileName() 
            Me.RichTextBox1.AppendText("Lost focus at " & Now & " due to " & appExePath & vbCrLf)
        Else
            Me.RichTextBox1.AppendText("Lost focus due to unknown cause.")
        End If

    End Sub
```

Create a new vb windows forms app, add a default-named Rich Text Box, then paste this code in the code-behind and run it.  It hooks up a handler to the Deactive and LostFocus events that will print out some information about what process is stealing focus.

In my case it ended up being Windows Error Reporting Service (which I stopped and disabled, because I don’t really care about it right now), though I’m sure there’s an underlying error going down in my system.

Ah well, that’s an issue for another day.