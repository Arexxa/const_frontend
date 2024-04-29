import React, { useEffect, useState } from 'react'
import Testcombo from './testcombo'
import baseUrl from '../../utils/api';

function Testing() {
    const [universities, setUniversities] = useState([])
    const [profileData, setProfileData] = useState({})
    const [selectedUniversity, setSelectedUniversity] = useState('');

    const getUniversity = async (name = '', country = 'malaysia') => {
        try {
            // Construct the API URL with the provided parameters
            const apiUrl = `http://universities.hipolabs.com/search?name=${name}&country=${country}`;
            // Make the API call
            const response = await fetch(apiUrl);
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to fetch university data');
            }
            // Parse the response JSON
            const data = await response.json();
            setUniversities(data);
            console.log('University data fetched successfully:', data);
            return data; // Return the fetched university data
        } catch (error) {
            console.error('Failed to fetch university data:', error);
            throw error; // Rethrow the error to handle it at a higher level
        }
    };

    const fetchData = async () => {
        try {
            const response = await baseUrl.get('/user/profile?userId=user-1001')
            console.log('profile data', response)
            const test = response.data.result
            console.log('profile data specific', test)
            setProfileData(test)
            // console.log("profile user uni", test.education.university)
        } catch (error) {
            console.error('Register failed!', error)
        }
    }

    useEffect(() => {
        getUniversity(); // Call the async function immediately
        fetchData()
    }, []); // Empty dependency array to run this effect only once on mount
    
    useEffect(() => {
        // When profileData changes, check and set selected university if available
        if (profileData.length > 0 && profileData[0].education) {
            const universityName = profileData[0].education[0]?.university;
            if (universityName) {
                setSelectedUniversity(universityName); // Set the initial selected university
                console.log("name", universityName); // Log the university name
            }
        }
    }, [profileData]);

    useEffect(() => {
        console.log("name", selectedUniversity);
    }, [selectedUniversity]); 

    return (
        <div>
            <div>testing combo multipe</div>
            
            <Testcombo universities={universities} selectedUniversity={selectedUniversity} />
        </div>
    )
}

export default Testing
