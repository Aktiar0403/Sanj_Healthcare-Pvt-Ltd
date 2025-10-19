<!-- seedFirestore.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Seed Firestore Data - Sanj Healthcare</title>
  <script type="module">
    // Import Firebase
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
    import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

    // 🔧 Paste your Firebase config here:
    const firebaseConfig = {
  apiKey: "AIzaSyBYVOTrCukjtoSMtVAfxvvheqirAldbVkw",
  authDomain: "sanj-healthcare-a32d8.firebaseapp.com",
  projectId: "sanj-healthcare-a32d8",
  storageBucket: "sanj-healthcare-a32d8.firebasestorage.app",
  messagingSenderId: "619095711353",
  appId: "1:619095711353:web:5010c27ba1d7ed0235bea8",
  measurementId: "G-JFTTPE452L"
};

    // Initialize Firebase and Firestore
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // 🚀 Sample Sanj Healthcare Data
    const companyInfo = {
      name: "Sanj Healthcare Pvt Ltd",
      address: "Silchar, Assam",
      gstRegistered: true
    };

    const products = [
      { id: "SAZLQ10", name: "SAZ LQ10", category: "Tablets", boxQty: "10x10", bonus: "10+1", price: 120 },
      { id: "CALSANZFEM", name: "CALSANZ FEM", category: "Tablets", boxQty: "10x10", bonus: "10+2", price: 110 },
      { id: "CALSANZSTRONG", name: "CALSANZ STRONG", category: "Tablets", boxQty: "10x10", bonus: "10+3", price: 130 },
      { id: "RABSANZDSR", name: "RABSANZ DSR", category: "Tablets", boxQty: "10x10", bonus: "10+2", price: 150 },
      { id: "SINOPLEX", name: "SINOPLEX SYRUP", category: "Syrup", boxQty: "1x60ml", bonus: "10+1", price: 95 },
      { id: "NEURONPLUS", name: "NEURON PLUS INJECTION", category: "Injection", boxQty: "1x10 ampule", bonus: "10+1", price: 60 }
    ];

    const stockists = [
      { id: "rubika", name: "Rubika", city: "Silchar", type: "Stockist", creditLimit: 50000 },
      { id: "centralmedical", name: "Central Medical", city: "Silchar", type: "Stockist", creditLimit: 60000 }
    ];

    const superstockists = [
      { id: "jayanta", name: "Jayanta", city: "Guwahati", type: "Superstockist" }
    ];

    const loans = [
      { id: "HDFC", lender: "HDFC Bank", amount: 500000, interest: 10, emi: 12000, balance: 360000, status: "active" },
      { id: "Bajaj", lender: "Bajaj Finance", amount: 300000, interest: 12, emi: 9500, balance: 180000, status: "active" },
      { id: "Lendingkart", lender: "Lendingkart", amount: 200000, interest: 11, emi: 6000, balance: 120000, status: "active" },
      { id: "Talukdar", lender: "Talukdar (Private)", amount: 150000, interest: 8, roiType: "interest-only", balance: 150000, status: "active" }
    ];

    const doctors = [
      { id: "drDas", name: "Dr. Das", city: "Silchar", ratio: 6 },
      { id: "drRoy", name: "Dr. Roy", city: "Guwahati", ratio: 8 }
    ];

    async function seedData() {
      try {
        // Company Info
        await setDoc(doc(db, "company", "info"), companyInfo);

        // Products
        for (const p of products) {
          await setDoc(doc(db, "products", p.id), p);
        }

        // Stockists
        for (const s of stockists) {
          await setDoc(doc(db, "stockists", s.id), s);
        }

        // Superstockists
        for (const ss of superstockists) {
          await setDoc(doc(db, "superstockists", ss.id), ss);
        }

        // Loans
        for (const l of loans) {
          await setDoc(doc(db, "loans", l.id), l);
        }

        // Doctors
        for (const d of doctors) {
          await setDoc(doc(db, "doctors", d.id), d);
        }

        alert("✅ Sanj Healthcare Firestore seeded successfully!");
      } catch (error) {
        console.error("Error seeding data:", error);
        alert("❌ Error: " + error.message);
      }
    }

    window.addEventListener("load", seedData);
  </script>
</head>
<body>
  <h2 style="text-align:center;">Seeding Firestore Data...</h2>
</body>
</html>
