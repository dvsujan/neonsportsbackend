const nodemailer = require('nodemailer');

const sendMail = async(email, code, name) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'password123'
        }
    });
    var mailOptions = {
        from: 'snapic.app.mail@gmail.com',
        to: email,
        subject: 'Snapic email verification',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>WELCOME</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
      <meta name="format-detection" content="telephone=no" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
      <style type="text/css">
        body {
        -webkit-text-size-adjust: 100% !important;
        -ms-text-size-adjust: 100% !important;
        -webkit-font-smoothing: antialiased !important;
        }
        img {
        border: 0 !important;
        outline: none !important;
        }
        p {
        Margin: 0px !important;
        Padding: 0px !important;
        }
        table {
        border-collapse: collapse;
        mso-table-lspace: 0px;
        mso-table-rspace: 0px;
        }
        td, a, span {
        border-collapse: collapse;
        mso-line-height-rule: exactly;
        }
        .ExternalClass * {
        line-height: 100%;
        }
        span.MsoHyperlink {
        mso-style-priority:99;
        color:inherit;}
        span.MsoHyperlinkFollowed {
        mso-style-priority:99;
        color:inherit;}
        </style>
        <style media="only screen and (min-width:481px) and (max-width:599px)" type="text/css">
        @media only screen and (min-width:481px) and (max-width:599px) {
        table[class=em_main_table] {
        width: 100% !important;
        }
        table[class=em_wrapper] {
        width: 100% !important;
        }
        td[class=em_hide], br[class=em_hide] {
        display: none !important;
        }
        img[class=em_full_img] {
        width: 100% !important;
        height: auto !important;
        }
        td[class=em_align_cent] {
        text-align: center !important;
        }
        td[class=em_aside]{
        padding-left:10px !important;
        padding-right:10px !important;
        }
        td[class=em_height]{
        height: 20px !important;
        }
        td[class=em_font]{
        font-size:14px !important;	
        }
        td[class=em_align_cent1] {
        text-align: center !important;
        padding-bottom: 10px !important;
        }
        }
        </style>
        <style media="only screen and (max-width:480px)" type="text/css">
        @media only screen and (max-width:480px) {
        table[class=em_main_table] {
        width: 100% !important;
        }
        table[class=em_wrapper] {
        width: 100% !important;
        }
        td[class=em_hide], br[class=em_hide], span[class=em_hide] {
        display: none !important;
        }
        img[class=em_full_img] {
        width: 100% !important;
        height: auto !important;
        }
        td[class=em_align_cent] {
        text-align: center !important;
        }
        td[class=em_align_cent1] {
        text-align: center !important;
        padding-bottom: 10px !important;
        }
        td[class=em_height]{
        height: 20px !important;
        }
        td[class=em_aside]{
        padding-left:10px !important;
        padding-right:10px !important;
        } 
        td[class=em_font]{
        font-size:14px !important;
        line-height:28px !important;
        }
        span[class=em_br]{
        display:block !important;
        }
        }
      </style>
    </head>
    <body style="margin:0px; padding:0px;" bgcolor="#ffffff">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
        <tr>
          <td align="center" valign="top"  bgcolor="#30373b">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
              <tr>
                <td style="line-height:0px; font-size:0px;" width="600" class="em_hide" bgcolor="#30373b"><img src="images/spacer.gif" height="1"  width="600" style="max-height:1px; min-height:1px; display:block; width:600px; min-width:600px;" border="0" alt="" /></td>
              </tr>
              <tr>
                <td valign="top">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_wrapper">
                    <tr>
                      <td height="10" class="em_height" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td valign="top">
                              <table width="150" border="0" cellspacing="0" cellpadding="0" align="right" class="em_wrapper">
                                </tr>
                              </table>
                              <table width="400" border="0" cellspacing="0" cellpadding="0" align="left" class="em_wrapper">
                                <tr>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="10" class="em_height" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top"  bgcolor="#ffffff">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
              <tr>
                <td height="40" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td align="center"><a href="#" target="_blank" style="text-decoration:none;"><img src="https://bccf0f7aca1d.ngrok.io/Posts/icon.png" width="130" height="100" style="display:block;font-family: Arial, sans-serif; font-size:15px; line-height:18px; color:#30373b;  font-weight:bold;" border="0" alt="Snapic:" /></a></td>

              </tr>
              <tr>
                <td height="30" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td height="14" style="font-size:1px; line-height:1px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:15px; line-height:18px; color:#30373b; text-transform:uppercase; font-weight:bold;" class="em_font">
                </td>
              </tr>
              <tr>
                <td height="14" style="font-size:1px; line-height:1px;">&nbsp;</td>
              </tr>
              <tr>
                <td height="1" bgcolor="#fed69c" style="font-size:0px; line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" style="display:block;" border="0" alt="" /></td>
              </tr>
              <tr>
                <td valign="top" class="em_aside">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td height="36" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/banner.jpg" width="333" height="303" alt="WELCOME" style="display:block; font-family:Arial, sans-serif; font-size:25px; line-height:303px; color:#c27cbb;max-width:333px;" class="em_full_img" border="0" /></td>
                    </tr>
                    <tr>
                      <td height="41" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td height="1" bgcolor="#d8e4f0" style="font-size:0px;line-height:0px;"><img src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif" width="1" height="1" alt="" style="display:block;" border="0" /></td>
                    </tr>
                    <tr>
                      <td height="35" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:15px; font-weight:bold; line-height:18px; color:#30373b;">Welcome ${name}</td>
                    </tr>
                    <tr>
                      <td height="22" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                      <td height="20" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:18px; line-height:20px; color:#feae39;">Use Code Below to login</td>
                    </tr>
                    <tr>
                      <td height="12" style="font-size:1px; line-height:1px;">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="top" align="center">
                        <table width="210" border="0" cellspacing="0" cellpadding="0" align="center">
                          <tr>
                            <td valign="middle" align="center" height="45" bgcolor="#feae39" style="font-family:'Open Sans', Arial, sans-serif; font-size:17px; font-weight:bold; color:#ffffff; text-transform:uppercase;">${code}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td height="34" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                    <tr>
                      <td height="31" class="em_height">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top"  bgcolor="#30373b" class="em_aside">
            <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="em_main_table" style="table-layout:fixed;">
              <tr>
                <td height="35" class="em_height">&nbsp;</td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td height="22" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td align="center" style="font-family:'Open Sans', Arial, sans-serif; font-size:12px; line-height:18px; color:#848789; text-transform:uppercase;">
                </td>
              </tr>
              <tr>
                <td height="10" style="font-size:1px; line-height:1px;">&nbsp;</td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td height="10" style="font-size:1px; line-height:1px;">&nbsp;</td>
              </tr>
              <tr>
              </tr>
              <tr>
                <td height="35" class="em_height">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <div style="display:none; white-space:nowrap; font:20px courier; color:#ffffff; background-color:#ffffff;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
    </body>
  </html>`

    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            return info.response;
        }
    });

}

module.exports = { sendMail }