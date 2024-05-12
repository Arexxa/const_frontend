import { Fragment } from 'react';
import React, { useEffect, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useLogin } from '../../Auth/Login/contexts/LoginContext';
import { useProfile } from './ProfileContexts';
import { useRegister } from '../../Auth/Register/contexts/RegisterContext';

export default function CoverLetterResumeDialog({ isCoverLetterResumeOpen, coverLetterResumePanel, applications }) {
  const { userData } = useLogin();
  const { userProfile, fetchUserProfile } = useProfile();
  const {registerApplication} = useRegister()
  const [coverLetterFile, setCoverLetterFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const handleSubmit = async () => {
    try {
        const applicationData = []
        if(coverLetterFile){
            applicationData.push({
                documentType: 'Cover Letter',
                fileName: coverLetterFile.name,
                fileData: coverLetterFile.url, 
                uploadDate: new Date().toISOString(),
            })
        }
        if(resumeFile){
            applicationData.push({
                documentType: 'Resume',
                fileName: resumeFile.name,
                fileData: resumeFile.url,
                uploadDate: new Date().toISOString(),
            })
        }
        console.log('application-data', applicationData)
        await registerApplication(userData.userId, applicationData)
        console.log('Applications updated successfully.')
        coverLetterResumePanel(); 
        fetchUserProfile(userData.userId);
    } catch (error) {
        console.error('Update application failed!', error)
    }
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const fileURL = reader.result;
      if (type === 'coverLetter') {
        setCoverLetterFile({ url: fileURL, name: fileName });
      } else if (type === 'resume') {
        setResumeFile({ url: fileURL, name: fileName });
      }
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (userData && !userProfile) {
      fetchUserProfile(userData.userId);
    }
  }, [userData, fetchUserProfile]);

  return (
    <Transition.Root show={isCoverLetterResumeOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={coverLetterResumePanel}>
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
                          Cover Letter and Resume
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-transparent"
                            onClick={coverLetterResumePanel}
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="coverLetter" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                    <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Uploda Cover Letter</h2>
                                    <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or drag & drop your file PDF. </p>
                                    <input id="coverLetter" type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'coverLetter')}/>
                                </label>
                            {coverLetterFile && (
                                <p className="mt-2 text-sm font-normal text-gray-900">{coverLetterFile.name}</p>
                            )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="resume" className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                    <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Uploda Resume</h2>
                                    <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or drag & drop your file PDF. </p>
                                    <input id="resume" type="file" className="hidden" onChange={(e) => handleFileUpload(e, 'resume')}/>
                                </label>
                            {resumeFile && (
                                <p className="mt-2 text-sm font-normal text-gray-900">{resumeFile.name}</p>
                            )}
                            </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                        onClick={coverLetterResumePanel}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="ml-4 inline-flex justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500"
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
