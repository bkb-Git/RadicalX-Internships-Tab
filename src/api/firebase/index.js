import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/index";

const internshipsCol = collection(db, "internships");

const getInternships = async () => {
  const internshipsSnapshot = await getDocs(internshipsCol);
  const internshipsList = internshipsSnapshot.docs.map((doc) => doc.data());

  return internshipsList;
};

export default getInternships;
