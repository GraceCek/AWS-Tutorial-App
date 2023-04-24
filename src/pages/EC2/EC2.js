import './EC2.css'
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import EC2_instance from "../../images/EC2_instance.PNG";
import EC2_console_1 from "../../images/EC2_console_1.PNG";
import EC2_console_2 from "../../images/EC2_console_2.PNG";
import EC2_console_3 from "../../images/EC2_console_3.PNG";
import EC2_console_4 from "../../images/EC2_console_4.PNG";
import EC2_console_5 from "../../images/EC2_console_5.PNG";


export default function EC2() {
    return (
        <div className="EC2">
            <center><h1 style={{ fontSize: 50 }}>Amazon Elastic Compute Cloud (EC2)</h1></center>
            <h1 style={{ fontSize: 40 }}>Overview</h1>
            <div className="split">
            <p style={{ fontSize: 20 }}>
                Amazon Elastic Compute Cloud (Amazon EC2) is a web-based service that allows businesses to run application programs in AWS. It offers the
                broadest and deepest compute platform, with over 600 instances and choice of the latest processor, storage,
                networking, operating system, and purchase model to help you best match the needs of your workload.
               <br></br> <br></br><b>Advantages:</b>
                <ul>
                    <li>Eliminates the need for physical servers</li>
                    <li>Ability to easily manage storage</li>
                    <li>Scalability</li>
                </ul>
                EC2 operates on the principle of multitenancy
                It runs on top of physical host machines managed by AWS using virtualization technology.
                Shares host with multiple other instances (virtual machines).
                Uses a hypervisor to share underlying physical resources between virtual machines.
            </p>
            <center><img src={EC2_instance} alt="EC2_instance" height={500} width={550} /></center>
            </div>

            <b style={{ fontSize: 20 }}>Types of EC2</b>
            <Accordion/>

            <h1 style={{ fontSize: 40 }}>Prerequisites</h1>
            <p style={{ fontSize: 20 }}>
                Please take time to familarize yourself with the following items before starting the tutorial.
                <ul>
                    <li><Link to="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/get-set-up-for-amazon-ec2.html#create-an-admin">Create an administrative user</Link></li>
                    <li><Link to="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/get-set-up-for-amazon-ec2.html#create-a-key-pair">Create a key pair</Link></li>
                    <li><Link to="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/get-set-up-for-amazon-ec2.html#create-a-base-security-group">Create a security group</Link></li> 
                </ul>
            </p>

            <h1 style={{ fontSize: 40 }}>Step 1: Launch an instance</h1>
            <ol style={{ fontSize: 20 }}>
                <li>Open the Amazon EC2 console at https://console.aws.amazon.com/ec2/.</li>
                <li>From the EC2 console dashboard, in the Launch instance box, choose Launch instance, and then choose Launch instance from the options that appear.</li>
                <center><img src={EC2_console_1} alt="EC2_console_1" height={400} width={600} /></center>
                <li>Under Name and tags, for Name, enter a descriptive name for your instance.</li>
                <li>Under Application and OS Images (Amazon Machine Image), do the following:
                    Choose Quick Start, and then choose the operating system (OS) for your instance.
                    From Amazon Machine Image (AMI), select the AMI for your OS server 2016 Base or later.. Notice that these AMIs are marked Free tier eligible.
                    An Amazon Machine Image (AMI) is a basic configuration that serves as a template for your instance.</li>
                <center><img src={EC2_console_2} alt="EC2_console_2" height={400} width={600} /></center>
                <li>Under Instance type, from the Instance type list, you can select the hardware configuration for your instance. Choose the t2.micro instance type, which is
                    selected by default. The t2.micro instance type is eligible for the free tier. In Regions where t2.micro is unavailable, you can use a t3.micro instance
                    under the free tier. For more information, see AWS Free Tier.</li>
                <li>Under Key pair (login), for Key pair name, choose the key pair that you created when getting set up. Note that you must select an RSA key.</li>
                <b>Warning: Do not choose Proceed without a key pair (Not recommended). If you launch your instance without a key pair, then you can't connect to it.</b>
                <center><img src={EC2_console_3} alt="EC2_console_3" height={400} width={600} /></center>

                <li>Next to Network settings, choose Edit. For Security group name, you'll see that the wizard created and selected a security group for you. You can use
                    this security group, or alternatively you can select the security group that you created when getting set up using the following steps:
                    Choose Select existing security group.
                    From Common security groups, choose your security group from the list of existing security groups.</li>
                <li>Keep the default selections for the other configuration settings for your instance.</li>
                <center><img src={EC2_console_4} alt="EC2_console_4" height={400} width={600} /></center>

                <li> Review a summary of your instance configuration in the Summary panel, and when you're ready, choose Launch instance.</li>
                <li>A confirmation page lets you know that your instance is launching. Choose View all instances to close the confirmation page and return to the console.</li>
                <li>On the Instances screen, you can view the status of the launch. It takes a short time for an instance to launch. When you launch an instance, its initial
                        state is pending. After the instance starts, its state changes to running and it receives a public DNS name. If the Public IPv4 DNS column is hidden
                        choose the settings icon ( Settings icon. ) in the top-right corner, toggle on Public IPv4 DNS, and choose Confirm.</li>
                <li>It can take a few minutes for the instance to be ready for you to connect to it. Check that your instance has passed its status checks;
                    you can view this information in the Status check column.</li>
                <center><img src={EC2_console_5} alt="EC2_console_5" height={150} width={600} /></center>

             </ol>

            <center>
                <Link to="/Overview/Setup" style={{ fontSize: 20 }}>Previous: AWS Free Tier Account Setup</Link>
                &emsp;&emsp;
                <Link to="/Overview/S3" style={{ fontSize: 20 }}>Next: Amazon Simple Storage Service (S3)</Link>
            </center>
        </div>
    );
}
