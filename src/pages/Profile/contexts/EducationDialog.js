import React, { Fragment, useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';

import { useLogin } from '../../Auth/Login/contexts/LoginContext';
import { useProfile } from './ProfileContexts';
import SingleBox from '../../../components/Singlebox';

export default function EducationDialog({ isEducationOpen, educationPanel }) {
  const { userData } = useLogin();
  const { userProfile, fetchUserProfile, updateUserProfile } = useProfile();
  const [formData, setFormData] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (userProfile && userProfile[0]) {
            const updatedProfile = { ...userProfile[0] };
            updatedProfile.education = [
                {
                    ...userProfile[0].education[0], // Keep the existing education data
                    course: formData.course, // Update the course field with the new value
                },
            ];
            const updatedData = {
                userId: userData.userId,
                updatedProfile: updatedProfile,
            };
            // Update user profile
            await updateUserProfile(updatedData);
            console.log('User profile updated successfully!');
        } else {
            console.error('User profile data not available.');
        }
        console.log('Updating user profile with data:', formData);
    } catch (error) {
        console.error('Error updating user profile:', error);
    }
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  // Only update formData if the value is not an empty string
  if (value !== '') {
      // For other fields, update as usual
      setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value, // Always update the formData with the new value
      }));
  }
};

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // Only update formData if the value is not an empty string
//     if (value !== '') {
//         // If the field is workExperience, education, or applications
//         if (['workExperience', 'education', 'applications'].includes(name)) {
//         // Get the existing data for the field
//         const existingData = userProfile && userProfile[0] && userProfile[0][name];
//         // Update the formData with the existing data only if formData is empty for this field
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: prevFormData[name].length === 0 ? existingData || [] : prevFormData[name],
//         }));
//         } else {
//         // For other fields, update as usual
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value, // Always update the formData with the new value
//         }));
//         }
//     }
// };
  
  useEffect(() => {
  if (userData && !userProfile) {
      fetchUserProfile(userData.userId);
  }
  }, [userData, userProfile, fetchUserProfile]);

  return (
    <Transition.Root show={isEducationOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={educationPanel}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                    <div className="px-4 pt-4 pb-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl font-semibold leading-6 text-gray-900">
                          Edit Education
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                            <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-transparent"
                            onClick={educationPanel}
                            >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
                        <form onSubmit={handleSubmit}>
                                <div className="flex justify-center">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-34 w-34"
                                        src="https://logo.clearbit.com/uitm.edu.my?size=200"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="pb-4">
                                    <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-900">
                                        University
                                    </label>
                                    {/* <input
                                        type="text"
                                        name="university"
                                        id="university"
                                        defaultValue={(formData.education && formData.education[0] && formData.education[0].university) ||
                                          (userProfile && userProfile[0]?.education && userProfile[0].education[0]?.university) ||
                                          ''}
                                        onChange={handleChange}
                                        className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                    /> */}
                                      <SingleBox
                                        name="university"
                                        id="university"
                                        defaultValue={(formData.education && formData.education[0] && formData.education[0].university) ||
                                        (userProfile && userProfile[0]?.education && userProfile[0].education[0]?.university) ||
                                        ''}
                                        onChange={handleChange}

                                      />
                                </div>

                                <div className="pb-4">
                                    <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                                        Course
                                    </label>
                                    <textarea
                                      name="course"
                                      id="course"
                                      defaultValue={(formData.education && formData.education[0] && formData.education[0].course) ||
                                        (userProfile && userProfile[0]?.education && userProfile[0].education[0]?.course) ||
                                        ''}
                                      onChange={handleChange}
                                      placeholder="Course"
                                      className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 h-25 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                    />

                                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                        onClick={educationPanel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
