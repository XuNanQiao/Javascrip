<%@ Page Language="C#" AutoEventWireup="true" CodeFile="fileUpload.aspx.cs" Inherits="Admin_shool_fileUpload" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <base target="_self" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:FileUpload ID="FileUpload1" runat="server" />&nbsp;
        <asp:Button ID="Button1" runat="server"
            Text="上传" onclick="Button1_Click" style="height: 22px" />
            
    </div>
    
  </form>
</body>
</html>

