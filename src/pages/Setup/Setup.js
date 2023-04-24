import './Setup.css'
import offers from "../../images/offers.PNG";
import cli from "../../images/cli.png";
import { Link } from 'react-router-dom';

export default function Setup() {
    return (
        <div className="Setup">
            <center><h1 style={{ fontSize: 50 }}>Setup</h1></center>
            <h1 style={{ fontSize: 40 }}>AWS Free Tier</h1>
            <p style={{ fontSize: 20 }}>When you create an AWS account, you can try some AWS services free of charge within certain usage limits. There are three types of offers in the AWS Free Tier programs to choose from: </p>
            <center><img src={offers} alt="offers" height={350} width={900} /></center>


            <h1 style={{ fontSize: 40 }}>Create an Account </h1>

            <ol style={{ fontSize: 20 }}>
                <b>Sign up using your email address</b>
                <br></br>
                <li>Open the Amazon Web Services (AWS) home page.</li>
                <li>Choose Create an AWS Account.Note: If you signed in to AWS recently, choose Sign in to the Console. If Create a new AWS account isn't visible, first choose Sign in to a different account, and then choose Create a new AWS account.</li>
                <li>In Root user email address, enter your email address, edit the AWS account name, and then choose Verify email address. An AWS verification email will be sent to this address with a verification code.</li>
                <li>Verify your email address: enter the code you receive, and then choose Verify. The code might take a few minutes to arrive. Check your email and spam folder for the verification code email.</li>
                <li>Create your password: enter your Root user password and Confirm root user password, and then choose Continue.</li>
                <br></br>
                <b>Add your contact information</b>
                <li>Select Personal or Business.Note: Personal accounts and business accounts have the same features and functions.</li>
                <li>Enter your personal or business information.Important: For business AWS accounts, it's a best practice to enter the company phone number rather than a personal cell phone number. Configuring a root account with an individual email
                    address or a personal phone number can make your account insecure.</li>
                <li>Read and accept the AWS Customer Agreement.</li>
                <li>Choose Continue.</li>
                <br></br>
                <b>Add a payment method</b>
                <li>On the Billing information page, enter the information about your payment method, and then choose Verify and Add.</li>
                <li>If you want to use a different billing address for your AWS billing information, choose Use a new address. Then, choose Verify and Continue.</li>
                <br></br>
                <b>Verify your phone number</b>
                <li>On the Confirm your identity page, select a contact method to receive a verification code.</li>
                <li>Select your phone number country or region code from the list.</li>
                <li>Enter a mobile phone number where you can be reached in the next few minutes.</li>
                <li>If presented with a CAPTCHA, enter the displayed code, and then submit.Note: To troubleshoot CAPTCHA errors, see What do I do if I receive an error when entering the CAPTCHA to sign in to my AWS account?</li>
                <li>In a few moments, an automated system contacts you. Enter the PIN you receive, and then choose Continue.</li>
                <br></br>
                <b>Choose an AWS Support plan</b>
                <br></br>
                <li>On the Select a support plan page, choose one of the available Support plans. For a description of the available Support plans and their benefits, see Compare AWS Support plans.</li>
                <br></br>
                <b>Wait for account activation</b>
                <br></br>
                After you choose a Support plan, a confirmation page indicates that your account is being activated. Accounts are usually activated within a few minutes, but the process might take up to 24 hours.
                You can sign in to your AWS account during this time. The AWS home page might display a Complete Sign Up button during this time, even if you've completed all the steps in the sign-up process. When your account is fully activated,
                you receive a confirmation email. Check your email and spam folder for the confirmation email. After you receive this email, you have full access to all AWS services.

               
            </ol>

            <h1 style={{ fontSize: 40 }}>AWS Command Line Interface (Optional)</h1>
            <div className="split">
                <p style={{ fontSize: 20 }}>
                    The AWS Command Line Interface (AWS CLI) is an open source tool that enables you to interact with AWS services using commands in your command-line shell. With minimal configuration, the AWS CLI enables you to start running commands
                    that implement functionality equivalent to that provided by the browser-based AWS Management Console from the command prompt in your terminal program. AWS is currently using the second version of the CLI. It can be downloaded using the provided link:
                    <Link to="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html">Installing or updating the latest version of the AWS CLI</Link>
                </p>
                <img src={cli} alt="cli" height={350} width={400} />
            </div>
            <center>
                <Link to="/Overview/Introduction" style={{ fontSize: 20 }}>Previous: Introduction</Link>
                &emsp;&emsp;
                <Link to="/Overview/EC2" style={{ fontSize: 20 }}>Next: Amazon Elastic Compute Cloud (EC2)</Link>
            </center>
        </div>
    );
}
