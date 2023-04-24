import './Lambda.css'
import { Link } from 'react-router-dom';
import lambda from "../../images/lambda.PNG";
import lambda_console_1 from "../../images/lambda_console_1.PNG";
import lambda_console_2 from "../../images/lambda_console_2.PNG";
import lambda_console_3 from "../../images/lambda_console_3.PNG";
import lambda_console_4 from "../../images/lambda_console_4.PNG";
import lambda_console_5 from "../../images/lambda_console_5.PNG";

export default function Lambda() {
    return (
        <div className="Lambda">
            <center><h1 style={{ fontSize: 50 }}>Lambda</h1></center>
            <h1 style={{ fontSize: 40 }}>Overview</h1>
            <p style={{ fontSize: 20 }}>
                AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. You can trigger Lambda
                from over 200 AWS services and software as a service (SaaS) applications, and only pay for what you use.
            </p>
            <center><img src={lambda} alt="lambda" height={400} width={900} /></center>

            <h1 style={{ fontSize: 40 }}>Prerequisites</h1>
            <p style={{ fontSize: 20 }}>
                Please take time to familarize yourself with the following items before starting the tutorial.
                <ul>
                    <li><Link to="https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html">Create an administrative user</Link></li>
                </ul>
            </p>

            <h1 style={{ fontSize: 40 }}>Step 1: Create a Lambda function</h1>
            <ol style={{ fontSize: 20 }}>
                <li>Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/lambda/.</li>
                <li>Open the Functions page of the Lambda console.</li>
                <center><img src={lambda_console_1} alt="lambda_console_1" height={400} width={800} /></center>

                <li>Choose Create function.</li>

                <li>Select Use a blueprint.</li>
                <center><img src={lambda_console_2} alt="lambda_console_2" height={500} width={800} /></center>

                <li>Open the Select blueprint dropdown list and search for Hello world function. Select nodejs or python.</li>
                <center><img src={lambda_console_3} alt="lambda_console_3" height={500} width={800} /></center>

                <li>Enter a Function name.</li>

                <li>For Execution role, choose Create a new role with basic Lambda permissions. Lambda creates an execution role that grants the function permission to upload logs to Amazon CloudWatch. The Lambda function assumes the execution role when you invoke your function, and uses the execution role to create credentials for the AWS SDK and to read data from event sources.</li>
                <center><img src={lambda_console_4} alt="lambda_console_4" height={400} width={800} /></center>
                <center><img src={lambda_console_5} alt="lambda_console_5" height={600} width={800} /></center>

            </ol>


            <center>
                <Link to="/Overview/S3" style={{ fontSize: 20 }}>Previous: Amazon Simple Storage Service (S3)</Link>
                &emsp;&emsp;
                <Link to="/Overview" style={{ fontSize: 20 }}>Next: End</Link>
            </center>
        </div>
    );
}
