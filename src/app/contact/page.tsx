// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
// } from "@/components/ui/select";

// import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "(+509) 3102-2885/4097-0794",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "stpreuxmykel@gmail.com",
//   },
//   {
//     icon: <FaMapMarkedAlt />,
//     title: "Address",
//     description: "Jeremie, Haiti ",
//   },
// ];

// const Contact = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="py-6"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-[30px]">
//           {/*  form  */}
//           <div className="xl:h-[54%] order-2 xl:order-none ">
//             <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
//               <h3 className="text-4xl text-accent">Let’s create something great together!</h3>
//               <p className="text-white/60">
//               Looking to bring your next project to life? Feel free to 
//               get in touch with me for any inquiries, collaborations, 
//               or to discuss how I can help you achieve your goals.
//               </p>

//               {/*  input */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <Input type="firstname" placeholder="Firstname" />
//                 <Input type="lastname" placeholder="Lastname" />
//                 <Input type="email" placeholder="Email" />
//                 <Input type="phone" placeholder="Phone number" />
//               </div>

//               {/*  select */}
//               <Select>
//                 <SelectTrigger className="w-full ">
//                     <SelectValue placeholder="Select a Service" />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectGroup>
//                         <SelectLabel>Select a service</SelectLabel>
//                         <SelectItem value="wd" >Web Developement</SelectItem>
//                         <SelectItem value="wa" >Web Application</SelectItem>
//                         <SelectItem value="ma" > Mobile App</SelectItem>
//                         <SelectItem value="ma" > Cloud Computing</SelectItem>
//                     </SelectGroup>
//                 </SelectContent>
//               </Select>

//               {/*  textarea */}

//               <Textarea 
//                 className="h-[200px]"
//                 placeholder="Type your message here "
//                />

//                <Button size="md" className="max-w-40">
//                 Send Message
//                </Button>
//             </form>
//           </div>

//           {/* info */}
//           <div
//             className="flex-1 flex items-center 
//                         xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
//           >
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => {
//                 return (
//                   <li key={index} className="flex items-center gap-6">
//                     <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
//                       <div className="text-[28px]">{item.icon}</div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-white/60" >{item.title}</p>
//                       <h3 className="text-xl">{item.description}</h3>
//                     </div>
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>

//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;



"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";

import { toast, Toaster } from 'react-hot-toast'; // Import Toaster


const Contact = () => {
  const [first_name, setFirstName] = useState(""); // Fixed the variable name
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://portfolio310.pythonanywhere.com/api/contact/", {
        first_name,
        last_name,
        email,
        phone,
        services,
        messages,
      })
      .then((response) => {
        toast.success("Message sent successfully!"); // Toast success message
        console.log("Message sent successfully:", response.data);
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setServices("");
        setMessages("");
      })
      .catch((error) => {
        toast.error("There was an error sending your message!"); // Toast error message
        console.error("There was an error!", error);
      });
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+509) 3102-2885/4097-0794",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "stpreuxmykel@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Jeremie, Haiti ",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
      <Toaster 
        position="top-center" 
        reverseOrder={false} 
        toastOptions={{
        duration: 3000, // 5000ms = 5 seconds
      }} 
/>

        
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let’s create something great together!
              </h3>
              <p className="text-white/60">
                Looking to bring your next project to life? Feel free to get
                in touch with me for any inquiries, collaborations, or to
                discuss how I can help you achieve your goals.
              </p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={first_name} // Use correct state variable
                  onChange={(e) => setFirstName(e.target.value)} // Fixed variable name
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={last_name} // Add value for last name
                  onChange={(e) => setLastName(e.target.value)} // Handle change
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email} // Add value for email
                  onChange={(e) => setEmail(e.target.value)} // Handle change
                  required
                />
                <Input
                  type="text"
                  placeholder="Phone number"
                  value={phone} // Add value for phone
                  onChange={(e) => setPhone(e.target.value)} // Handle change
                  required
                />
              </div>

              {/* select */}
              <Select onValueChange={setServices}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Web Application">Web Application</SelectItem>
                    <SelectItem value="Mobile App">Mobile App</SelectItem>
                    <SelectItem value="Cloud Computing">Cloud Computing</SelectItem> {/* Fixed duplicate value */}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                value={messages} // Add value for messages
                onChange={(e) => setMessages(e.target.value)} // Handle change
                required
              />

              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div
            className="flex-1 flex items-center 
                        xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

