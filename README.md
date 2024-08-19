## **Tokenization Project**

### **Overview**
This Next.js application is a study project for tokenizing real-world assets. It provides a user-friendly interface for users to learn about the tokenized asset and purchase tokens using a compatible cryptocurrency wallet.


### **Key Features**
* **Informative Landing Page:** Detailed information about the tokenized asset, including its characteristics and benefits.
* **Seamless Purchase Process:** Integrated with a popular cryptocurrency wallet (e.g., Metamask) to facilitate token purchases.
* **Responsive Design:** Ensures an optimal user experience across various devices.

### **Technology Stack**
* **Login:** Supabase
* **Frontend:** Next.js
* **Styling:** Tailwind CSS
* **State Management:** Likely using `@tanstack/react-query` or `swr` for data fetching and caching.
* **UI Components:** `@headlessui/react`, `@heroicons/react`, `@nextui-org/dropdown`, and others for building the user interface.
* **Blockchain Interactions:** `ethers`, `viem`, and `wagmi` for interacting with the Ethereum blockchain.
* **Internationalization:** `next-i18next` and `next-intl` for supporting multiple languages.
* **Form Handling:** Currently using Google Forms, with plans to replace it with React Forms.

### **Project Structure**
* **components:** Reusable UI components.
* **pages:** Individual pages of the application (e.g., landing page, purchase page).
* **public:** Static assets like images and fonts.
* **styles:** Global styles.
* **utils:** Helper functions and custom hooks.