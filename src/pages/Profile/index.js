import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
import {
  PencilIcon,
  TrashIcon
} from '@heroicons/react/outline'
import { useLogin } from '../Auth/Login/contexts/LoginContext';
import { useProfile } from './contexts/ProfileContexts';
import SlideDialog from './contexts/SlideDialog';
import ProfileDialog from './contexts/ProfileDialog';
import EducationDialog from './contexts/EducationDialog';
import CoverLetterResumeDialog from './contexts/CoverLetterResumeDialog';

const user = {
  name: 'Ben Said',
  handle: 'deblewis',
  email: 'debbielewis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80',
}

export default function Profile() {
  const { userData } = useLogin();
  const { userProfile, fetchUserProfile, deleteDocument } = useProfile();
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isCoverLetterResumeOpen, setIsCoverLetterResumeOpen] = useState(false);
  const [selectedWorkExpId, setSelectedWorkExpId] = useState('')

  const experiencePanel = (workExperienceId) => {
    setIsExperienceOpen(!isExperienceOpen);
    setSelectedWorkExpId(workExperienceId)
  };

  const profilePanel = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const educationPanel = () => {
    setIsEducationOpen(!isEducationOpen);
  };

  const coverLetterResumePanel = () => {
    setIsCoverLetterResumeOpen(!isCoverLetterResumeOpen)
  }

  const handleDeleteDocument = async(documentId) => {
    try {
      await deleteDocument(userData.userId, documentId)
      fetchUserProfile(userData.userId);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }

  const handlePreview = (fileData) => {
    const base64Data = fileData.split(',')[1];
    const binaryData = atob(base64Data); 

    const blob = new Blob([binaryData], { type: 'application/pdf' }); 
    const url = URL.createObjectURL(blob); 

    window.open(url, '_blank'); 
  }

  useEffect(() => {
    if (userData && !userProfile) {
      fetchUserProfile(userData.userId);
    }
  }, [userData, userProfile, fetchUserProfile]);

  // Function to format date range
  const formatDateRange = (startDateString, endDateString, currentEmployer) => {
    const startDate = new Date(startDateString);

    // If currentEmployer is 1, replace end date with "Present"
    let endDate;
    if (currentEmployer === 1) {
      endDate = "Present";
    } else {
      endDate = new Date(endDateString);
    }

    // Options for formatting month and year
    const options = { month: "long", year: "numeric" };
    // Format start date
    const formattedStartDate = startDate.toLocaleDateString("en-US", options);
    // If endDate is not "Present", format it
    const formattedEndDate = endDate === "Present" ? endDate : endDate.toLocaleDateString("en-US", options);
    // Construct formatted date range
    return `${formattedStartDate} - ${formattedEndDate}`;
  };

  return (
    <div className="w-full h-screen flex flex-col justify-start ">
      <Sidebar />
      <div className="bg-zinc-500 pb-32">
        <header className="py-10 text-left">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
        </header>
      </div>

      <main className="relative -mt-32 lg:pl-96">
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg">
            <div className="divide-y divide-gray-200">
              <div className="text-left divide-y divide-gray-200 lg:col-span-9">
                {/* Profile section */}
                <div className="px-4 py-6 sm:p-6 lg:pb-8">
                  <div className="mt-6 mb-6 flex flex-col lg:flex-row">
                    <div className="mt-6 flex-grow lg:mr-6 lg:mt-0 lg:flex-shrink-0 lg:flex-grow-0">
                      <div className="mt-2 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                            aria-hidden="true"
                          >
                            <img className="h-full w-full rounded-full" src={user.imageUrl} alt="" />
                          </div>
                          <div className="relative ml-5">
                            <input
                              id="mobile-user-photo"
                              name="user-photo"
                              type="file"
                              className="peer absolute h-full w-full rounded-md opacity-0"
                            />
                            <label
                              htmlFor="mobile-user-photo"
                              className="pointer-events-none block rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 peer-hover:ring-gray-400 peer-focus:ring-2 peer-focus:ring-sky-500"
                            >
                              <span>Change</span>
                              <span className="sr-only"> user photo</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="relative hidden overflow-hidden lg:block shadow-lg">
                        <img className="relative h-48 w-48" src={user.imageUrl} alt="" />
                        <label
                          htmlFor="desktop-user-photo"
                          className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="desktop-user-photo"
                            name="user-photo"
                            className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="flex w-full items-end">
                      <div>
                        <label htmlFor="name" className="abel block text-xl font-medium leading-6 text-gray-900">
                          {(userProfile && userProfile[0]?.name) || ''}
                        </label>
                        <p className="abel mt-2 text-base text-gray-900">
                        {(userProfile && userProfile[0]?.workExperience && userProfile[0].workExperience[0]?.position)
                          ? userProfile[0].workExperience[0].position
                          : ''}
                        </p>
                      </div>
                    </div>

                    {/* Profile button edit */}
                    <div className="flex w-full items-end justify-end">
                      <div className="px-4 py-5">
                        <div className="flex justify-between items-center">
                          <button type='button' className="flex items-center space-x-1 text-gray-400 hover:text-gray-300" onClick={profilePanel}>
                            <PencilIcon className="h-5 w-5 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                            <span>Edit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="abel text-base font-medium leading-6 text-gray-900">About me</h2>
                    <p className="mt-1 text-sm text-gray-500">
                    {(userProfile && userProfile[0]?.profile_description) || ''}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="flex space-x-6 items-center col-span-12 sm:col-span-6">
                      <label htmlFor="email" className="abel block text-sm font-medium leading-6 text-gray-900">
                        Email :
                      </label>
                      <p className="text-sm text-gray-900">
                        {userProfile?.[0]?.email || ''}
                      </p>
                    </div>

                    <div className="flex space-x-6 items-center col-span-12 sm:col-span-6">
                      <label htmlFor="portfolio" className="abel block text-sm font-medium leading-6 text-gray-900">
                        Portfolio :
                      </label>
                      <p className="text-sm text-gray-900">
                        {userProfile?.[0]?.portfolio || ''}
                      </p>
                    </div>

                    <div className="flex space-x-6 items-center col-span-12 sm:col-span-6">
                      <label htmlFor="city" className="abel block text-sm font-medium leading-6 text-gray-900">
                        Location :
                      </label>
                      <p className="text-sm text-gray-900">
                        {userProfile?.[0]?.city || ''}
                      </p>
                    </div>

                    <div className="flex space-x-6 items-center col-span-12 sm:col-span-6">
                      <label htmlFor="website" className="abel block text-sm font-medium leading-6 text-gray-900">
                        Website :
                      </label>
                      <p className="text-sm text-gray-900">
                        {userProfile?.[0]?.website || ''}
                      </p>
                    </div>
                  </div>
                  <hr className='mt-6'/>

                  <div className="mt-6 bg-white border border-gray-200 sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      {/* Edit button */}
                      <div className="flex justify-between items-center">
                        <h3 className="abel text-xl font-semibold leading-6 text-gray-900">Experience</h3>
                      </div>

                      {/* todo- looping for displaying work experience detail */}
                      <div className="mt-2 text-base text-gray-500 flex space-x-4">
                        {userProfile?.[0]?.workExperience.map((experience, index) => (
                          <div key={index} className="border border-gray-200 sm:rounded-lg sm:p-4 flex-1 flex items-center">
                            <div className="w-full">
                              <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold leading-6 text-gray-900"></h3>
                                <button type="button" className="flex items-center space-x-1 text-gray-400 hover:text-gray-300" onClick={() => experiencePanel(experience.workExperienceId)}>
                                    <PencilIcon className="h-5 w-5 -ml-0.5 mr-1.5" aria-hidden="true" />
                                    <span>Edit</span>
                                </button>
                              </div>
                              <h3 className="abel text-base font-semibold leading-6 text-gray-900">{experience.position}</h3>
                              <div className="max-w-xl text-sm font-normal text-gray-900">
                                <p className="abel">{experience.company}</p>
                              </div>
                              <div className="max-w-xl text-sm font-normal text-gray-400">
                                <p>{formatDateRange(experience.startDate, experience.endDate, experience.currentEmployer)}</p>
                              </div>
                              <div className="max-w-xl text-sm font-normal text-gray-900">
                                <p>{experience.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* todo- looping for displaying education detail */}
                  <div className="mt-6 bg-white border border-gray-200 sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex justify-between items-center">
                        <h3 className="abel text-xl font-semibold leading-6 text-gray-900">Education</h3>
                        <button type="button" className="flex items-center space-x-1 text-gray-400 hover:text-gray-300" onClick={educationPanel}>
                          <PencilIcon className="h-5 w-5 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="ml-4 mt-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-24 w-24"
                              src="https://logo.clearbit.com/uitm.edu.my?size=200"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">Universiti Teknologi Mara</h3>
                            <div className="max-w-xl text-sm font-normal text-gray-900">
                              <p>
                                Bachelor of Applied Science - BASc, Biology/Biological Sciences, General
                              </p>
                            </div>
                            <div className="max-w-xl text-sm font-normal text-gray-400">
                              <p>
                                2017 - 2019
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cover letter & resume*/}
                  <div className="mt-6 bg-white border border-gray-200 sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className='flex justify-between items-center'>
                        <h3 className="abel text-xl font-semibold leading-6 text-gray-900">Cover letter & Resume</h3>
                        <button type="button" className="flex items-center space-x-1 text-gray-400 hover:text-gray-300" onClick={coverLetterResumePanel}>
                          <PencilIcon className="h-5 w-5 -ml-0.5 mr-1.5" aria-hidden="true" />
                          <span>Edit</span>
                        </button>
                      </div>
                      <div className="mt-2 text-base text-gray-500 flex space-x-4">
                        {userProfile?.[0]?.applications.map((application, index) => (
                          <div key={index} className="border border-gray-200 sm:rounded-lg sm:p-4 flex-1 flex items-center">
                            <svg width="70" height="70" viewBox="0 10 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0233 18.3496C10.778 18.3496 10.6127 18.3721 10.5273 18.3946V19.8671C10.6287 19.8896 10.7553 19.8959 10.93 19.8959C11.5687 19.8959 11.962 19.5934 11.962 19.0821C11.962 18.6246 11.6233 18.3496 11.0233 18.3496ZM15.6727 18.3646C15.406 18.3646 15.2327 18.3871 15.13 18.4096V21.6721C15.2327 21.6946 15.398 21.6946 15.5473 21.6946C16.6367 21.7021 17.346 21.1396 17.346 19.9496C17.354 18.9121 16.7073 18.3646 15.6727 18.3646Z" fill="#C10000"/>
                              <path d="M18.6673 2.5H8.00065C7.29341 2.5 6.61513 2.76339 6.11503 3.23223C5.61494 3.70107 5.33398 4.33696 5.33398 5V25C5.33398 25.663 5.61494 26.2989 6.11503 26.7678C6.61513 27.2366 7.29341 27.5 8.00065 27.5H24.0007C24.7079 27.5 25.3862 27.2366 25.8863 26.7678C26.3864 26.2989 26.6673 25.663 26.6673 25V10L18.6673 2.5ZM12.6647 20.2375C12.2527 20.6 11.6447 20.7625 10.9367 20.7625C10.7994 20.7639 10.6622 20.7564 10.526 20.74V22.5225H9.33398V17.6025C9.87192 17.5273 10.4155 17.493 10.9593 17.5C11.702 17.5 12.23 17.6325 12.586 17.8988C12.9247 18.1512 13.154 18.565 13.154 19.0525C13.1527 19.5425 12.9793 19.9563 12.6647 20.2375ZM17.7407 21.9312C17.1807 22.3675 16.3287 22.575 15.2873 22.575C14.6633 22.575 14.222 22.5375 13.922 22.5V17.6038C14.4601 17.5301 15.0035 17.4954 15.5473 17.5C16.5567 17.5 17.2127 17.67 17.7247 18.0325C18.278 18.4175 18.6247 19.0312 18.6247 19.9125C18.6247 20.8663 18.2527 21.525 17.7407 21.9312ZM22.6673 18.4625H20.6247V19.6012H22.534V20.5188H20.6247V22.5237H19.4167V17.5375H22.6673V18.4625ZM18.6673 11.25H17.334V5L24.0007 11.25H18.6673Z" fill="#C10000"/>
                            </svg>
                            <div className="w-full">
                              <div className="flex items-center justify-between">
                                <h3 className="abel text-base font-semibold leading-6 text-gray-900">{application.documentType}</h3>
                                <button className="flex items-center space-x-1 text-gray-400 hover:text-gray-300" onClick={() => {handleDeleteDocument(application.documentId)}}>
                                  <TrashIcon className="h-5 w-5 -ml-0.5" aria-hidden="true" />
                                </button>
                              </div>
                              <div className="text-sm font-normal text-gray-900">
                                <p className='abel'>{application.fileName}</p>
                              </div>
                              <div className="text-sm font-normal text-gray-900">
                                <p>{application.uploadDate.split('T')[0]}</p>
                              </div>
                              <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2">
                                <div>
                                  <p className="abel text-left text-sm">
                                    <a href="" className="text-blue-500 focus:outline-none focus:underline hover:underline" onClick={() => {handlePreview(application.fileData)}}>Preview</a>
                                  </p>
                                </div>
                                <div>
                                  <p className="abel text-right text-sm">
                                    <a href={application.fileData} className="text-blue-500 focus:outline-none focus:underline hover:underline" download={application.fileName}>Download</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Slide-in panel Experience */}
      <SlideDialog isExperienceOpen={isExperienceOpen} experiencePanel={experiencePanel} workExperienceId={selectedWorkExpId} />
      <ProfileDialog isProfileOpen={isProfileOpen} profilePanel={profilePanel} />
      <EducationDialog isEducationOpen={isEducationOpen} educationPanel={educationPanel} />
      <CoverLetterResumeDialog isCoverLetterResumeOpen={isCoverLetterResumeOpen} coverLetterResumePanel={coverLetterResumePanel} applications={userProfile?.[0]?.applications || []} />
    </div>
  )
}
