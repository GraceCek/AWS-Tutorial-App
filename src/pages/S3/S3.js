import './S3.css'
import { Link } from 'react-router-dom';
import s3 from "../../images/s3.PNG";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import s3_console_1 from "../../images/s3_console_1.PNG";
import s3_console_2 from "../../images/s3_console_2.PNG";

export default function S3() {
    return (
        <div className="S3">
            <center><h1 style={{ fontSize: 50 }}>Simple Storage Service (S3)</h1></center>
            <h1 style={{ fontSize: 40 }}>Overview</h1>
            <p style={{ fontSize: 20 }}>
                Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance.
                Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and
                mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access
                controls to meet specific business, organizational, and compliance requirements.
             </p>
             <center><img src={s3} alt="s3" height={500} width={800} /></center>

            <b style={{ fontSize: 20 }}>Storage Classes</b>
            <p style={{ fontSize: 20 }}>
                Amazon S3 offers a range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads. S3 storage classes
                are purpose-built to provide the lowest cost storage for different access patterns. S3 storage classes are ideal for virtually any use case, including those with demanding
                performance needs, data residency requirements, unknown or changing access patterns, or archival storage.
            </p>
            <ImageSlider slides={SliderData} />

            <h1 style={{ fontSize: 40 }}>Prerequisites</h1>
            <p style={{ fontSize: 20 }}>
                Please take time to familarize yourself with the following items before starting the tutorial.
                <ul>
                    <li><Link to="https://docs.aws.amazon.com/AmazonS3/latest/userguide/setting-up-s3.html#create-an-admin">Create an administrative user</Link></li>
                </ul>
            </p>

            <h1 style={{ fontSize: 40 }}>Step 1: Create your first S3 bucket</h1>
            <ol style={{ fontSize: 20 }}>
                <li>Sign in to the AWS Management Console and open the Amazon S3 console at https://console.aws.amazon.com/s3/.</li>
                <li>In the left navigation pane, choose Buckets.</li>
                <li>Choose Create bucket.</li>
                <center><img src={s3_console_2} alt="s3_console_2" height={400} width={800} /></center>
                <li>For Bucket name, enter a name for your bucket. The bucket name must: be unique within a partition (grouping of regions) AWS currently has three partitions: aws (Standard Regions), aws-cn (China Regions), and aws-us-gov (AWS GovCloud [US] Regions). Be between 3 and 63 characters long, onsist only of lowercase letters, numbers, dots (.), and hyphens (-). Begin and end with a letter or number.</li>
                <li>After you create the bucket, you cannot change its name. For more information about naming buckets, see Bucket naming rules.</li>
                <b>Important: Avoid including sensitive information, such as account numbers, in the bucket name. The bucket name is visible in the URLs that point to the objects in the bucket. </b>
                <li>For Region, choose the AWS Region where you want the bucket to reside.</li>
                <li>Under Object Ownership, to disable or enable ACLs and control ownership of objects uploaded in your bucket, choose one of the following settings:

                    ACLs disabled Bucket owner enforced - ACLs are disabled, and the bucket owner automatically owns and has full control over every object in the bucket. ACLs no longer affect access permissions to data in the S3 bucket. The bucket uses policies to define access control.
                    To require that all new buckets are created with ACLs disabled by using AWS Identity and Access Management (IAM) or AWS Organizations policies.
                    ACLs enabled
                    Bucket owner preferred - The bucket owner owns and has full control over new objects that other accounts write to the bucket with the bucket-owner-full-control canned ACL.

                    If you apply the bucket owner preferred setting, to require all Amazon S3 uploads to include the bucket-owner-full-control canned ACL, you can add a bucket policy that allows only object uploads that use this ACL. Object writer - The AWS account that uploads an object owns the object, has full control over it, and can grant other users access to it through ACLs.
                <b>Note
                To apply the Bucket owner enforced setting or the Bucket owner preferred setting, you must have permission to use the following actions: s3:CreateBucket and s3:PutBucketOwnershipControls.</b></li>
                <li>Under Block Public Access settings for this bucket, choose the Block Public Access settings that you want to apply to the bucket.</li>
                <li>(Optional) Under Bucket Versioning, you can choose if you wish to keep variants of objects in your bucket. For more information about versioning, see Using versioning in S3 buckets.</li>
                 <li>(Optional) Under Tags, you can choose to add tags to your bucket. Tags are key-value pairs used to categorize storage.</li>
                 <li>Under Default encryption, choose Edit.</li>
                <li>To configure default encryption, under Encryption key type, choose one of the following:
                    Amazon S3 managed key (SSE-S3)
                    AWS Key Management Service key (SSE-KMS)
                    <b>Important: If you use the SSE-KMS option for your default encryption configuration, you are subject to the requests per second (RPS) quota of AWS KMS. Buckets and new objects are encrypted with server-side encryption with an Amazon S3 managed key as the base level of encryption configuration.</b></li>
                <li> If you chose AWS Key Management Service key (SSE-KMS), do the following:
                    Under AWS KMS key, specify your KMS key in one of the following ways:
                    To choose from a list of available KMS keys, choose Choose from your AWS KMS keys, and choose your KMS key from the list of available keys.
                    Both the AWS managed key (aws/s3) and your customer managed keys appear in this list.
                    To enter the KMS key ARN, choose Enter AWS KMS key ARN, and enter your KMS key ARN in the field that appears.
                    To create a new customer managed key in the AWS KMS console, choose Create a KMS key.
                    When you use an AWS KMS key for server-side encryption in Amazon S3, you must choose a symmetric encryption KMS key. Amazon S3 supports only symmetric encryption KMS keys and not asymmetric KMS keys.
                    When you configure your bucket to use default encryption with SSE-KMS, you can also enable S3 Bucket Keys. S3 Bucket Keys lower the cost of encryption by decreasing request traffic from Amazon S3 to AWS KMS.</li>
                 <li> (Optional) If you want to enable S3 Object Lock, do the following: Choose Advanced settings.
                    <b>Important: You can only enable Object Lock for a bucket when you create it, and you cannot disable it later. Enabling Object Lock also enables versioning for the bucket. After enabling you must configure the Object Lock default retention and legal hold settings to protect new objects from being deleted or overwritten.</b></li>
                <li> Choose Create bucket.</li>
            </ol>
            <center><img src={s3_console_1} alt="s3_console_1" height={400} width={800} /></center>


            <center>
                <Link to="/Overview/EC2" style={{ fontSize: 20 }}>Previous: Amazon Elastic Compute Cloud (EC2)</Link>
                &emsp;&emsp;
                <Link to="/Overview/Lambda" style={{ fontSize: 20 }}>Next: Amazon Lambda</Link>
            </center>
        </div>
    );
}
