import './Introduction.css'
import CloudComputing from "../../images/CloudComputing.jpg";
import Accordion from './Accordion';
import { Link } from 'react-router-dom';


export default function Introduction() {
    return (
        <div className="Introduction">
            <center><h1 style={{ fontSize: 50 }}>Overview of Amazon Web Services</h1></center>
            <h1 style={{ fontSize: 40 }}>Introduction</h1>
            <div className="split">
                <p style={{ fontSize: 20 }}>In 2006, Amazon Web Services (AWS) began offering IT infrastructure services to businesses as web services-now commonly known as cloud computing. One of the key benefits of cloud computing is the opportunity to replace upfront capital infrastructure expenses with low variable costs that scale with your business. With the cloud, businesses no
                    longer need to plan for and procure servers and other IT infrastructure weeks or months in advance. Instead, they can instantly spin up hundreds or thousands of servers in minutes and deliver results faster. Today, AWS provides a highly reliable, scalable, low-cost infrastructure platform in the cloud that powers hundreds of thousands of businesses in 190 countries around the world.
                    Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers-including the fastest-growing startups, largest enterprises, and leading government agencies-are using AWS to lower costs, become more agile, and innovate faster.
                </p>
                <div className="padding"><img src={CloudComputing} alt="Cloud Computing" height={300} width={350} /></div>
            </div>

            <h1 style={{ fontSize: 40 }}>Cloud Computing</h1>

            <p style={{ fontSize: 20 }}>Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. It caters to a variety of industries and offers a massive range of services including: computing, storage, and network security. AWS has become a highly available, scalable, low-cost infrastructure platform.
                    Most services are not exposed directly to the end users, but instead, provide functionality through APIs that developers can utilize in their applications. AWS products are accessed over HTTP, using the REST architectural style and SOAP protocol for older APIs, and exclusively accessed using JSON for newer ones. A wide variety of services are
                    used to provide security, data transfers, compliance, and data management. <br></br>Cloud computing provides a simple way to access servers, storage, databases and a broad set of application services over the internet. A cloud services platform such as Amazon Web Services owns and maintains the network-connected hardware required for these application services,
                    while you provision and use what you need via a web application.
             </p>

            <h1 style={{ fontSize: 40 }}>Types of Cloud Computing</h1>
            <p style={{ fontSize: 20 }}>
                    As cloud computing has grown in popularity, several different models and deployment strategies have emerged to help meet specific needs of different users. Each type of cloud service and deployment method provides you with different levels of control, flexibility, and management. Understanding the differences between Infrastructure as a Service, Platform as a Service, and Software as a Service.
            </p>
            <Accordion />
            <center>
                <Link to="/Overview" style={{ fontSize: 20 }}>Previous: Course Overview</Link>
                &emsp;&emsp;
                <Link to="/Overview/Setup" style={{ fontSize: 20 }}>Next: AWS Free Tier Account Setup</Link>
            </center>
        </div>
    );
}
