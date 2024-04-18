// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// Assuming you have a custom hook for Firebase authentication
import UseAuth from '../../hook/UseAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,  } from 'react';

const UpdateProfilePage = () => {
  const {user} = UseAuth();  
  console.log(user)// const { register, handleSubmit, setValue } = useForm();
  // const [loading, setLoading] = useState(false);
  // const history = useHistory();

//   useEffect(() => {
//     if (!currentUser) {
//       history.push('/login'); // Redirect to login if user is not authenticated
//     } else {
//       // Fetch user information and populate form fields
//       setValue('name', currentUser.displayName || '');
//       setValue('image', currentUser.photoURL || '');
//     }
//   }, [currentUser, history, setValue]);
// u
//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       // Update profile using Firebase
//       await updateUserProfile(data.name, data.image);
//       console.log('Profile updated successfully!');
//       setLoading(false);
//       history.push('/'); // Redirect to home or profile page
//     } catch (error) {
//       console.error('Error updating profile:', error.message);
//       setLoading(false);
//       // Display error message to the user
//     }
//   };
useEffect(() => {
  AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false  // Only animate once
  });
}, [])
  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto mt-20  p-6 bg-blue-50 rounded-lg shadow-xl" data-aos="flip-left">
      <h2 className="text-2xl mb-4 font-extrabold text-blue-800">Update Profile</h2>
      
      <div className="flex items-center space-x-4 mb-4">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:tooltip hover:tooltip-open hover:tooltip-bottom" >
        
        <div className="w-15 rounded-full">
          <img src={user?.photoURL || "https://i.ibb.co/BcWRPHQ/derek-lee-93-L-Ph-OWPk-Y-unsplash.jpg"} />
       
        </div>
        </div>
        <div>
          <p className="text-lg font-raleway mt-3 font-semibold">Hi, <span className='text-green-900 font-bold font-raleway'>{user?.displayName}</span></p>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      <form  className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
         <input type="text" placeholder="new name" name="" id="" className='border border-gray-300 w-full rounded-2xl p-3 mt-2'/>
        
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input type="text" placeholder="url" name="" id="" className='border border-gray-300 w-full rounded-2xl p-3 mt-2'/>
        
        </div>
        <button type="submit"  className="w-1/2 text-center bg-green-700 py-2 px-4 border border-transparent rounded-md flex items-center justify-center text-white font-medium hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
        Save Change  {/* {loading ? 'Updating...' : 'Update Profile'} */}
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default UpdateProfilePage;
