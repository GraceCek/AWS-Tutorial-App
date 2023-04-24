import './Overview.css'
//import CloudComputing from "../../images/CloudComputing.jpg";
import React from 'react';
import { Link } from 'react-router-dom';

export default function Overview() {
    return (
        <div className="Overview">
            <center><h1 style={{ fontSize: 50 }}>Course Overview</h1></center>
            <h1 style={{ fontSize: 40 }}>Objective</h1>
            <div className="split">
                <p style={{ fontSize: 20 }}>
                    This course aims to familarize users with various AWS services. Users will learn how to access and manage services through the AWS Management Console and
                    AWS Command Line Interface (AWS CLI). The over arching goal of this course is to expose users to AWS and start preparing them to pursue certifications.
                    Additional resources and practice test questions for the AWS Certified Cloud Practitioner are also provided,
                </p>
            </div>
            <h1 style={{ fontSize: 40 }}>Roadmap</h1>
            <p style={{ fontSize: 20 }}>
                <ul>
                    <li><Link to="Introduction">Introduction</Link></li>
                    <li><Link to="Setup">AWS Free Tier Account Setup</Link></li>
                    <li><Link to="EC2">Amazon Elastic Compute Cloud (EC2)</Link></li>
                    <li><Link to="S3">Amazon Simple Storage Service (S3)</Link></li>
                    <li><Link to="Lambda">Amazon Lambda</Link></li>
                    <li><Link to="SampleQuestions">Sample Exam Questions</Link></li>
                </ul>
            </p>


        </div>
    );
}
