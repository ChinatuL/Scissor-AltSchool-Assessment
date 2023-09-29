import lineIcon from "./assets/images/icon-line.svg"
import featureIcon1 from "./assets/images/icon-link.svg";
import featureIcon2 from "./assets/images/icon-edit.svg";
import featureIcon3 from "./assets/images/icon-grid.svg";
import featureIcon4 from "./assets/images/icon-activity.svg";

export const line = lineIcon;

export const dropdownList = [
    { id: 1, href: "#url-shortening", text: "URL Shortening" },
    { id: 2, href: "#custom-urls", text: "Custom URLs" },
    { id: 3, href: "#qr-codes", text: "QR Codes" },
    { id: 4, href: "#data-analytics", text: "Data Analytics" },
];

export const statistics = [
    { id: 1, heading: "3M", text: "Active users" },
    { id: 2, heading: "60M", text: "Links & QR codes created" },
    { id: 3, heading: "1B", text: "Clicked & Scanned connections" },
    { id: 4, heading: "300K", text: "App integrations" },
];

export const features = [
    {
        id: "url-shortening",
        src: featureIcon1,
        alt: "Icon for url",
        heading: "URL Shortening",
        text: "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.",
    },
    {
        id: "custom-urls",
        src: featureIcon2,
        alt: "Edit icon",
        heading: "Custom URLs",
        text: "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.",
    },
    {
        id: "qr-codes",
        src: featureIcon3,
        alt: "Bar code icon",
        heading: "QR Codes",
        text: "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.",
    },
    {
        id: "data-analytics",
        src: featureIcon4,
        alt: "Analytics icon",
        heading: "Data Analytics",
        text: "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.",
    },
];

export const plans = [
    {
        id: 1,
        heading: "Basic",
        type: "Free",
        text: "Free plan for all users",
        planFeatures: [
            "Unlimited URL Shortening",
            "Basic Link Analytics",
            "Customizable Short Links",
            "Standard Support",
            "Ad-supported",
        ],
        classValue: "card card-basic",
    },
    {
        id: 2,
        heading: "Professional",
        type: "$15/month",
        text: "Ideal for business creators",
        planFeatures: [
            "Enhanced Link Analytics",
            "Custom Branded Domains",
            "Advanced Link Customization",
            "Priority Support",
            "Ad-free Experience",
        ],
        classValue: "card card-professional",
    },
    {
        id: 3,
        heading: "Teams",
        type: "$25/month",
        text: "Share with up to 10 users",
        planFeatures: [
            "Team Collaboration",
            "User Roles and Permissions",
            "Enhanced Security",
            "API Access",
            "Dedicated Account Manager",
        ],
        classValue: "card card-teams",
    },
];

export const faqs = [
    {
        id: 1,
        question: "How does URL shortening work?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
        id: 2,
        question:
            "Is it necessary to create an account to use the URL shortening service?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 3,
        question: "Are the shortened links permanent? Will they expire?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 4,
        question:
            "Are there any limitations on the number of URLs I can shorten?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 5,
        question:
            "Can I customize the shortened URLs to reflect my brand or content?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 6,
        question: " Can I track the performance of my shortened URLs?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 7,
        question:
            "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 8,
        question: "What is a QR code and what can it do?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
    {
        id: 9,
        question:
            "Is there an API available for integrating the URL shortening service into my own applications or websites?",
        answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus corporis suscipit perspiciatis ducimus voluptates repudiandae rerum illo! Cum delectus eligendi porro illo nesciunt distinctio, quo ad explicabo dignissimos, quidem libero.",
    },
];

export const navGroups = [
    {
        id: 1,
        heading: "Why Scissor ?",
        links: ["Scissor 101", "Integrations & API", "Pricing"],
    },
    {
        id: 2,
        heading: "Solutions",
        links: [
            "Social Media",
            "Digital Marketing",
            "Customer Service",
            "For Developers",
        ],
    },
    {
        id: 3,
        heading: "Products",
        links: ["Link Management", "QR Codes", "Link-in-bio"],
    },
    {
        id: 4,
        heading: "Company",
        links: ["About", "Careers", "Partners", "Press", "Contact", "Reviews"],
    },
    {
        id: 5,
        heading: "Resources",
        links: [
            "Blog",
            "Resource Library",
            "Developers",
            "App Connectors",
            "Support",
            "Trust Center",
            "Browser Extension",
            "Mobile App",
        ],
    },
    {
        id: 6,
        heading: "Features",
        links: [
            "Branded Links",
            "Mobile Links",
            "Campaign",
            "Management &",
            "Analytics",
            "QR Code Generation",
        ],
    },
    {
        id: 7,
        heading: "Legal",
        links: [
            "Privacy Policy",
            "Cookie Policy",
            "Terms of Service",
            "Acceptable Use Policy",
            "Code of Conduct",
        ],
    },
];
