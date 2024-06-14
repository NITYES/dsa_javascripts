const axios=require('axios');


async function main(){
try {
   await axios.post('http://localhost:3000/api/email/sendemail', {
        to: 'nitesh.chaurasiya@antiersolutions.com',
        from: 'donotreply<test_email_service@rooba.finance>',
        subject:"Welocme note",
        content:`<!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="x-apple-disable-message-reformatting" />
          <title></title>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700" rel="stylesheet" />
          <style>
            html,
            body {
              margin: 0 auto !important;
              padding: 0 !important;
              height: 100% !important;
              width: 100% !important;
              background: #fff;
            }
        
            * {
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
            }
        
            div[style*="margin: 16px 0"] {
              margin: 0 !important;
            }
        
            table,
            td {
              mso-table-lspace: 0pt !important;
              mso-table-rspace: 0pt !important;
            }
        
            table {
              border-spacing: 0 !important;
              border-collapse: collapse !important;
              table-layout: fixed !important;
              margin: 0 auto !important;
            }
        
            img {
              -ms-interpolation-mode: bicubic;
            }
        
            a {
              text-decoration: none;
            }
        
            *[x-apple-data-detectors],
            /* iOS */
            .unstyle-auto-detected-links *,
            .aBn {
              border-bottom: 0 !important;
              cursor: default !important;
              color: inherit !important;
              text-decoration: none !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
            }
        
            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
            .a6S {
              display: none !important;
              opacity: 0.01 !important;
            }
        
            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
            .im {
              color: inherit !important;
            }
        
            /* If the above doesn't work, add a .g-img class to any image in question. */
            img.g-img+div {
              display: none !important;
            }
        
            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
            /* Create one of these media queries for each additional viewport size you'd like to fix */
        
            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
              u~div .email-container {
                min-width: 320px !important;
              }
            }
        
            /* iPhone 6, 6S, 7, 8, and X */
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
              u~div .email-container {
                min-width: 375px !important;
              }
            }
        
            /* iPhone 6+, 7+, and 8+ */
            @media only screen and (min-device-width: 414px) {
              u~div .email-container {
                min-width: 414px !important;
              }
            }
        
            @media (max-width: 480px) {
              .email-container {
                margin: 0 10px !important;
              }
            }
          </style>
        
          <!-- CSS Reset : END -->
        
          <!-- Progressive Enhancements : BEGIN -->
          <style>
            .primary {
              background: #dd0a35;
            }
        
            .bg_white {
              background: #ffffff;
            }
        
            .bg_light {
              background: #fafafa;
            }
        
            .bg_black {
              background: #1a245b;
            }
        
            .bg_dark {
              background: rgba(0, 0, 0, 0.8);
            }
        
            .email-section {
              font-family: "Work Sans", sans-serif;
              padding: 0.5em 1em;
            }
        
            /*BUTTON*/
        
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: "Work Sans", sans-serif;
              margin-top: 0;
              font-weight: normal;
              color: rgba(255, 255, 255, 0.9);
            }
        
            body {
              font-family: "Work Sans", sans-serif;
              font-weight: 400;
              font-size: 15px;
              line-height: 1.8;
              color: rgba(255, 255, 255, 0.5);
              margin: 150px 0;
            }
        
            a {
              color: #f38b3e !important;
            }
        
            /*LOGO*/
        
            .logo {
              margin: 0;
              display: inline-block;
              position: absolute;
              top: 10px;
              left: 0;
              right: 0;
              margin-bottom: 0;
            }
        
            .logo a {
              color: #fff;
              font-size: 24px;
              font-weight: 700;
              text-transform: uppercase;
              font-family: "Work Sans", sans-serif;
              display: inline-block;
              border: 2px solid #fff;
              line-height: 1.3;
              padding: 10px 15px 4px 15px;
              margin: 0;
            }
        
            /*HERO*/
        
            .heading-section h2 {
              color: #1f254c;
              font-size: 28px;
              margin-top: 0;
              line-height: 1.4;
              font-weight: 400;
              /* text-transform: uppercase; */
              letter-spacing: 1px;
            }
        
            .heading-section .subheading {
              margin-bottom: 20px !important;
              display: inline-block;
              font-size: 13px;
              font-family: "Work Sans", sans-serif;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #ffffff;
              position: relative;
            }
        
            .heading-section .subheading::after {
              position: absolute;
              left: 0;
              right: 0;
              bottom: -5px;
              content: "";
              width: 100%;
              height: 2px;
              background: transparent linear-gradient(91deg, #ea443a 0%, #f38b3e 50%, #f8aa2f 100%) 0% 0% no-repeat padding-box;
              margin: 0 auto;
            }
        
            .heading-section .subheading::before {
              position: absolute;
              left: 0;
              right: 0;
              bottom: -10px;
              content: "";
              width: 70%;
              height: 2px;
              background: transparent linear-gradient(91deg, #ea443a 0%, #f38b3e 50%, #f8aa2f 100%) 0% 0% no-repeat padding-box;
              margin: 0 auto;
            }
        
            .heading-section-white h2 {
              line-height: 1;
              padding-bottom: 0;
              color: #ffffff;
            }
        
            .heading-section-white p {
              color: #c0c1d6;
              line-height: 24px;
              font-family: "Work Sans", sans-serif;
            }
        
            /*FOOTER*/
        
            .footer {
              color: rgba(255, 255, 255, 1);
            }
        
            .footer .heading {
              color: #ffffff;
              font-size: 20px;
            }
        
            p, h2, h3, h4, h5, h6 ,h1{
                color: white;
            }
        
            @media screen and (max-width: 500px) {}
          </style>
        </head>
        
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly">
          <div style="width: 100%; background-color: #fff; padding: 150px 0">
            <div style="
                  max-width: 600px;
                  margin: 0 auto;
                  border-radius: 20px;
                  background-color: #1a245b;
                " class="email-container">
              <!-- BEGIN BODY -->
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                style="margin: auto">
                <tr>
                  <td class="email-section" style="text-align: center; padding-top: 3em">
                    <div class="logo_area">
                      <img src="https://satge-s3-ruba.s3.us-west-2.amazonaws.com/rooba_finance_logo.png" alt="icon" />
                    </div>
                    <div class="heading-section heading-section-white"
                      style="padding: 16px; font-family: Arial; line-height: 1.6">
                      <span class="subheading">Welcome to</span>
                      <h2>
                        <%=process.env.PROJECT_NAME%>
                      </h2>
                      <%-content %>
                        <p>
                          Regards, <br />
                          <a href="<%= process.env.CLIENT_URL%>">
                            <%=project_name %>
                          </a>
                        </p>
                    </div>
                  </td>
                </tr>
                <!-- end: tr -->
              </table>
              <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                style="margin: auto; padding-top: 20px">
                <tr>
                  <td valign="middle" class="bg_black footer email-section" style="
                        background: #1f254c;
                        border-bottom-left-radius: 20px;
                        border-bottom-right-radius: 20px;
                        padding: 16px;
                      ">
                    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
                      style="margin: auto">
                      <tr>
                        <td valign="top" style="text-align: center; width: 100%">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="text-align: center; padding: 0 10px">
                                <p style="color: #fff">
                                  &copy;<%=copyright_year %>
                                    <a style="color: #c91039" href="https://www.rooba.finance/">
                                      <%=project_name %>
                                    </a>
                                    copyright All rights reserved
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </body>
        
        </html>`
      },{
        headers:{
            "content-type":"application/json"
        }
      })
} catch (error) {
    console.log("error----->",error.response.data)
}
   
}

main()
