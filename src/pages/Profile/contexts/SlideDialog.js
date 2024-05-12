import { Fragment } from 'react';
import React, { useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useLogin } from '../../Auth/Login/contexts/LoginContext';
import { useProfile } from './ProfileContexts';

export default function SlideDialog({ isExperienceOpen, experiencePanel, workExperienceId }) {
  const { userData } = useLogin();
  const { userProfile, fetchUserProfile,updateWorkExperience } = useProfile();
  const [formData, setFormData] = useState({});

  const formatDateFromDB = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Load data into form fields when dialog opens
  useEffect(() => {
    if (isExperienceOpen && userProfile && userProfile[0]) {
      const selectedExperience = userProfile[0].workExperience.find(exp => exp.workExperienceId === workExperienceId);
      if (selectedExperience) {
        setFormData({
          position: selectedExperience.position || '',
          company: selectedExperience.company || '',
          description: selectedExperience.description || '',
          startDate: selectedExperience.startDate || '',
          endDate: selectedExperience.endDate || '',
          currentEmployer: selectedExperience.currentEmployer === 1,
        });
      }
    }
  }, [isExperienceOpen, userProfile, workExperienceId]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (userProfile && userProfile[0]) {
          const updatedWorkExperience = {
            position: formData.position,
            company: formData.company,
            description: formData.description,
            startDate: formData.startDate,
            endDate: formData.endDate,
            currentEmployer: formData.currentEmployer ? 1 : 0,
          }
          await updateWorkExperience(userData.userId, workExperienceId, updatedWorkExperience);
          console.log('User profile updated successfully!');
          experiencePanel(); 
          fetchUserProfile(userData.userId);
        } else {
          console.error('User profile data not available.');
        }
      console.log('Updating user profile with data:', formData);
      } catch (error) {
        console.error('Error updating user profile:', error);
      }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };
  
  useEffect(() => {
      if (userData && !userProfile) {
          fetchUserProfile(userData.userId);
      }
  }, [userData, userProfile, fetchUserProfile]);

  return (
    <Transition.Root show={isExperienceOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={experiencePanel}>
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
                          Edit Experience
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-transparent"
                            onClick={experiencePanel}
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
                            <div className="pb-4">
                              <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                                  Position
                              </label>
                              <input
                                  type="text"
                                  name="position"
                                  id="position"
                                  defaultValue={formData?.position || ''}
                                  onChange={handleChange}
                                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                              />
                            </div>

                            <div className="pb-4">
                              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                                  Company
                              </label>
                              <input
                                  type="text"
                                  name="company"
                                  id="company"
                                  defaultValue={formData?.company || ''}
                                  onChange={handleChange}
                                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                              />
                            </div>

                            <div className="pb-4">
                              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                  Description
                              </label>
                              <textarea
                                  name="description"
                                  id="description"
                                  defaultValue={formData?.description || ''}
                                  onChange={handleChange}
                                  placeholder="lorem..."
                                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 h-25 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                                  >
                              </textarea> 
                          </div>

                          <div className="pb-4">
                            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="startDate"
                                id="startDate"
                                defaultValue={formatDateFromDB(formData?.startDate)}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="pb-4">
                            <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <input
                                type="date"
                                name="endDate"
                                id="endDate"
                                defaultValue={formatDateFromDB(formData?.endDate)}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-0 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="pb-4">
                            <label htmlFor="currentEmployer" className="block text-sm font-medium leading-6 text-gray-900">
                              Current Employer
                            </label>
                            <input
                                type="checkbox"
                                name="currentEmployer"
                                id="currentEmployer"
                                checked={formData.currentEmployer}
                                onChange={handleChange}
                                className="block w-4 h-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                        onClick={experiencePanel}
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
