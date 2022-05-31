const emailVerifyTemplate = (user) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    </head>
    
    <body style="margin: 0;
                background: #86868b;
                color: #2C3E50;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;">
        <!-- Preivew text -->
        <span class="preheader"
            style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;border-collapse: collapse;border: 0;"></span>
        <!-- Carpool logo -->
    <table border="0" cellspacing="0" cellpadding="0" style="max-width: 480px;
        min-width: 400px; margin: 0 auto; border: 0 !important;">
            <tbody>
                <tr>
                    <td style="background-color: #fff; padding: 20px;">
                        <div><img src="https://i.imgur.com/l6scH2K.png" height="60" class=""></div>
                    </td>
                </tr>
                <!-- Header -->
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;
        background: #fff;
        padding-top: 5rem;
        padding-bottom: 1rem;
        "><div style="font-size: 20px;font-family: 'Roboto', sans-serif; font-weight: 500; text-align: center;">Thanks for joining us, ${user.firstName}!</div>
    
                    </td>
                </tr>
                <!-- Content -->
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;">
                        <table border="0" cellspacing="0" cellpadding="0" class="section_content" style="max-width: 500px;
        min-width: 460px;
        text-align: center;
        width: 100%;
        background: #fff;">
                            <tbody>
                                <tr>
                                    <td style="text-align: left; padding: 10px 70px;">
                                        <div style="font-size: 14px;font-family: 'Roboto', sans-serif; font-weight: 400;">Please confirm your email address to
                                            finish
                                            creating your EasyOZ agent profile.</div>
                                    </td>
                                </tr>
                            <tr>
                                <td style="padding-bottom: 8rem; padding-top: 3rem;">
                                    <div><a href="${user.link}" style=" text-decoration:none; font-family: 'Roboto', sans-serif;background-color:#33CC66;color: #fff;
                                    border: 0; border-radius: 4px;font-size: 24px; cursor: pointer; font-weight: 500; padding: 12px 20px;
                                        ">Confirm my email</a></div>
                                </td>
                            </tr>
                                
                            </tbody>
                        </table>
                    </td>
                </tr>
                <!-- Signature -->
                <tr>
                    <td style="padding-top: 1.5rem; vertical-align: top;border: none !important; background-color: #F0F2F5;text-align: center;">
                        <img src="https://i.imgur.com/l6scH2K.png" height="40" alt="">
                    </td>
                </tr>
                <tr>
                    <td style="font-family: 'Roboto', sans-serif;vertical-align: top;background-color: #F0F2F5;text-align: center;">
                        <div style="color: #C4C4C4; font-size: 16px; padding-bottom: 1rem; padding-top: 1rem;">2021 EasyOZ</div>
                    </td>
                </tr>
                <tr>
                    <td style="    border: none !important;background-color: #F0F2F5;text-align: center;">
                        <div style="color: #C4C4C4; font-size: 16px;font-family: 'Roboto', sans-serif;">Address here</div>
                    </td>
                </tr>
                <!-- Footer -->
    
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;
        background-color: #F0F2F5;text-align: center; padding: 1rem 0;">
        <div style="display: flex; justify-content: center;">
            <div>
                <a href="javascript:voif(0)" style="color: #C4C4C4;font-family: 'Roboto', sans-ser#user-firstnameif;"><u>Preferences</u></a>
            </div>
            <div>
                <a href="javascript:voif(0)" style="color: #C4C4C4;font-family: 'Roboto', sans-serif;"><u>Unsuscribe</u></a>
            </div>
        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    
    </body>
    
    </html>`
}

const forgotPasswordTemplate = (user) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    </head>
    
    <body style="margin: 0;
                background: #86868b;
                color: #2C3E50;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;">
        <!-- Preivew text -->
        <span class="preheader"
            style="display: none !important; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;border-collapse: collapse;border: 0;"></span>
        <!-- Carpool logo -->
    <table border="0" cellspacing="0" cellpadding="0" style="max-width: 480px;
        min-width: 400px; margin: 0 auto; border: 0 !important;">
            <tbody>
                <tr>
                    <td style="background-color: #fff; padding: 20px;">
                        <div><img src="https://i.imgur.com/l6scH2K.png" height="60" class=""></div>
                    </td>
                </tr>
                <!-- Header -->
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;
        background: #fff;
        padding-top: 5rem;
        padding-bottom: 1rem;
        "><div style="font-size: 20px;font-family: 'Roboto', sans-serif; font-weight: 500; text-align: center;">Hi ${user.firstName}, forgot your password?</div>
    
                    </td>
                </tr>
                <!-- Content -->
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;">
                        <table border="0" cellspacing="0" cellpadding="0" class="section_content" style="max-width: 500px;
        min-width: 460px;
        text-align: center;
        width: 100%;
        background: #fff;">
                            <tbody>
                                <tr>
                                    <td style="text-align: left; padding: 10px 70px;">
                                        <div style="font-size: 14px;font-family: 'Roboto', sans-serif; font-weight: 400;">We’ve received a request to reset your password. 
                                        No changes have been made to your account yet.
                                        
                                        You can reset your password by clicking the link below:.</div>
                                    </td>
                                </tr>
                            <tr>
                                <td style="padding-bottom: 8rem; padding-top: 3rem;">
                                    <div><a href="${user.link}" style=" text-decoration:none; font-family: 'Roboto', sans-serif;background-color:#33CC66;color: #fff;
                                    border: 0; border-radius: 4px;font-size: 24px; cursor: pointer; font-weight: 500; padding: 12px 20px;
                                        ">Reset my password</a></div>
                                </td>
                            </tr>
                                
                            </tbody>
                        </table>
                    </td>
                </tr>
                <!-- Signature -->
                <tr>
                    <td style="padding-top: 1.5rem; vertical-align: top;border: none !important; background-color: #F0F2F5;text-align: center;">
                        <img src="https://i.imgur.com/l6scH2K.png" height="40" alt="">
                    </td>
                </tr>
                <tr>
                    <td style="font-family: 'Roboto', sans-serif;vertical-align: top;background-color: #F0F2F5;text-align: center;">
                        <div style="color: #C4C4C4; font-size: 16px; padding-bottom: 1rem; padding-top: 1rem;">2021 EasyOZ</div>
                    </td>
                </tr>
                <tr>
                    <td style="    border: none !important;background-color: #F0F2F5;text-align: center;">
                        <div style="color: #C4C4C4; font-size: 16px;font-family: 'Roboto', sans-serif;">Address here</div>
                    </td>
                </tr>
                <!-- Footer -->
    
                <tr>
                    <td style="
        vertical-align: top;
        border: none !important;
        background-color: #F0F2F5;text-align: center; padding: 1rem 0;">
        <div style="display: flex; justify-content: center;">
            <div>
                <a href="javascript:voif(0)" style="color: #C4C4C4;font-family: 'Roboto', sans-ser#user-firstnameif;"><u>Preferences</u></a>
            </div>
            <div>
                <a href="javascript:voif(0)" style="color: #C4C4C4;font-family: 'Roboto', sans-serif;"><u>Unsuscribe</u></a>
            </div>
        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    
    </body>
    
    </html>`
}

module.exports = {emailVerifyTemplate, forgotPasswordTemplate}