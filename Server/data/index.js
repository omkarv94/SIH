import mongoose from "mongoose";

const bookIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
  ];
const bookData = [
    {
      domain: "Ayurveda",
      title: "Ayurvedic Principles and Practice",
      author: "Dr. Anand Sharma",
      publication: "Ayurveda Publications",
      bookDescription: "A comprehensive guide to Ayurvedic principles and their practical application.",
      ISBN: "1111111111111",
    },
    {
      domain: "Siddha",
      title: "Siddha Medicine: Ancient Healing Wisdom",
      author: "Dr. Priya Singh",
      publication: "Siddha Healing Press",
      bookDescription: "Exploring the ancient Siddha healing system.",
      ISBN: "2222222222222",
    },
    {
      domain: "Unani",
      title: "Unani Medicine: Theory and Practice",
      author: "Dr. Ali Khan",
      publication: "Unani Health Books",
      bookDescription: "A comprehensive guide to Unani medicine.",
      ISBN: "3333333333333",
    },
    {
      domain: "Ayurveda",
      title: "Ayurvedic Herbs and Remedies",
      author: "Dr. Aparna Patel",
      publication: "Ayurveda Publications",
      bookDescription: "A guide to Ayurvedic herbs and their therapeutic uses.",
      ISBN: "4444444444444",
    },
    {
      domain: "Siddha",
      title: "Siddha Yoga: The Path to Enlightenment",
      author: "Swami Siddharthananda",
      publication: "Siddha Enlightenment Center",
      bookDescription: "Exploring the spiritual aspects of Siddha practices.",
      ISBN: "5555555555555",
    },
    {
      domain: "Unani",
      title: "Unani Pharmacology: Modern Applications",
      author: "Dr. Fatima Khan",
      publication: "Unani Health Books",
      bookDescription: "Modern applications of Unani pharmacology.",
      ISBN: "6666666666666",
    },
    {
      domain: "Ayurveda",
      title: "Ayurvedic Diet and Nutrition",
      author: "Dr. Rajesh Sharma",
      publication: "Ayurveda Publications",
      bookDescription: "A guide to dietary practices in Ayurveda.",
      ISBN: "7777777777777",
    },
    {
      domain: "Siddha",
      title: "Siddha Medicine: Herbal Remedies",
      author: "Dr. Meena Krishnan",
      publication: "Siddha Healing Press",
      bookDescription: "Herbal remedies in Siddha medicine.",
      ISBN: "8888888888888",
    },
    {
      domain: "Unani",
      title: "Unani Surgery: Techniques and Innovations",
      author: "Dr. Ahmed Khan",
      publication: "Unani Health Books",
      bookDescription: "Innovative surgical techniques in Unani medicine.",
      ISBN: "9999999999999",
    },
    // Add more books for Ayurveda, Siddha, and Unani domains...
  ];
  
  // Add more book entries to reach a total of 40...
  
  // Now, you have 40 example book entries for the specified domains.
  export default bookData;