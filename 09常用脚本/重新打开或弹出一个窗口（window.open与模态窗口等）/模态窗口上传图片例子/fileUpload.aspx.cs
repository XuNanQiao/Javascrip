using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using SdZzyBll;
using System.Text;

public partial class Admin_shool_fileUpload : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }
    SchoolManager schoolBll = new SchoolManager();
    protected void Button1_Click(object sender, EventArgs e)
    {
        if (FileUpload1.PostedFile.FileName.Trim() == "")
        {
            Common.MessageBox(this, "请上传");
        }
        else
        {
            //图片上传并将图片重命名
            try
            {
                if (FileUpload1.HasFile)
                {
                    if (IsAllowedExtension(FileUpload1))
                    {
                        string filepath = FileUpload1.FileName;
                        //string filename = filepath.Substring(filepath.LastIndexOf('\\') + 1, filepath.Length - filepath.LastIndexOf('\\') - 1);//(filepath.LastIndexOf("\\") + 1);
                        //以年-月-日-时-分-秒-毫米将图片重新命名
                        string filename = DateTime.Now.ToString("yyyyMMddHHmmss") + filepath.Substring(filepath.LastIndexOf('.'), filepath.Length - filepath.LastIndexOf('.'));
                        //设定上传路径（绝对路径）
                        string uppath = Server.MapPath("~/uploadfile/center/") + filename;
                        string path = "/uploadfile/center/" + filename;
                        //图片上传至绝对路径 www.2cto.com
                        FileUpload1.PostedFile.SaveAs(uppath);


                        Response.Write("<script language=javascript>alert('上传成功！');window.close();window.returnValue='"+path+"'</script>");
                    }
                }
            }
            catch (Exception ex)
            {
                Common.MessageBox(this, "上传发生错误！原因是：" + ex.ToString());
            }
        }

    }
    //判断上传文件是否是图片
    private bool IsAllowedExtension(FileUpload upfile)
    {
        string strOldFilePath = "";
        string strExtension = "";
        string[] arrExtension = { ".gif", ".jpg", ".bmp", ".png" };
        if (upfile.PostedFile.FileName != string.Empty)
        {
            strOldFilePath = upfile.PostedFile.FileName;//获得文件的完整路径名 
            strExtension = strOldFilePath.Substring(strOldFilePath.LastIndexOf("."));//获得文件的扩展名，如：.jpg 
            for (int i = 0; i < arrExtension.Length; i++)
            {
                if (strExtension.Equals(arrExtension[i]))
                {
                    return true;
                }
            }
        }
        return false;
    }
}
