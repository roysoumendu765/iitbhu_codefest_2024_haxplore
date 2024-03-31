import React from 'react'
import temple from './assests/temple.png'
import './CardSection.css'
import temple1 from './assests/Designer (2).png'

function CardSection() {
  return (
    <div className='row'>
      <div className='col-12'>
        <div className='row py-3 my-3'>
          <div className='col-12 col-lg-6 my-3 d-flex justify-content-center justify-content-lg-center align-items-center'>
            <img className='img formContainer p-0 w-75' src={temple1} alt="designer" />
          </div>
          <div className='col-10 col-lg-4 my-3 fw-bold mx-auto' style={{'textAlign':'justify'}}>
          <p>भोले नाथ, अनन्त चेतना, अज्ञान के नाशक, और दया का स्वरूप, मैं आपको अपनी विनम्र प्रार्थना समर्पित करता हूँ। जटाधार विशाल केशवाला चंद्रमा और नगर की पवित्र गंगा के साथ, आप दिव्य कृपा के प्रतीक हैं। आपकी तीसरी आँख ज्ञान का प्रतीक है, जो धर्म का मार्ग प्रकाशित करती है। ध्यान और योग के शासक के रूप में, आप हमें आंतरिक शांति और ज्ञान की ओर प्रेरित करते हैं।

ओह, महादेव, परमात्मा, मैं अपनी आत्मिक यात्रा पर आधारित बाधाओं को पार करने के लिए आपकी कृपा की मंगलकामना करता हूँ। मुझे शक्ति प्रदान करें कि संसारिक इच्छाओं को पार कर दिव्य सत्य को अपनाया जा सके। आपकी दिव्य उपस्थिति मेरे मन, शरीर, और आत्मा को शुद्ध करे, जो मुझे जन्म-मृत्यु के चक्र से मुक्ति की ओर ले जाए।

कैलाश पर्वत के दिव्य निवास में, स्वर्गीय प्राणियों और दिव्य शांति से घिरे हुए, मैं आपके समक्ष श्रद्धापूर्वक झुकता हूँ। भोले नाथ, माया की प्रलोभन से मुझे बचाएं और मुझे शाश्वत सत्य की ओर गाइड करें।

जोड़े हुए हाथों और भक्ति से भरे हुए दिल के साथ,  हर हर महादेव!</p>
          </div>
        </div>
      </div>
      <div className='col-12'>
        <div className='row py-3 my-3 d-flex flex-column-reverse flex-lg-row'>
          <div className='col-10 col-lg-4 my-3 fw-bold mx-auto mx-lg-auto 'style={{'textAlign':'justify'}}>
          <p>भोले नाथ, अनन्त चेतना, अज्ञान के नाशक, और दया का स्वरूप, मैं आपको अपनी विनम्र प्रार्थना समर्पित करता हूँ। जटाधार विशाल केशवाला चंद्रमा और नगर की पवित्र गंगा के साथ, आप दिव्य कृपा के प्रतीक हैं। आपकी तीसरी आँख ज्ञान का प्रतीक है, जो धर्म का मार्ग प्रकाशित करती है। ध्यान और योग के शासक के रूप में, आप हमें आंतरिक शांति और ज्ञान की ओर प्रेरित करते हैं।

ओह, महादेव, परमात्मा, मैं अपनी आत्मिक यात्रा पर आधारित बाधाओं को पार करने के लिए आपकी कृपा की मंगलकामना करता हूँ। मुझे शक्ति प्रदान करें कि संसारिक इच्छाओं को पार कर दिव्य सत्य को अपनाया जा सके। आपकी दिव्य उपस्थिति मेरे मन, शरीर, और आत्मा को शुद्ध करे, जो मुझे जन्म-मृत्यु के चक्र से मुक्ति की ओर ले जाए।

कैलाश पर्वत के दिव्य निवास में, स्वर्गीय प्राणियों और दिव्य शांति से घिरे हुए, मैं आपके समक्ष श्रद्धापूर्वक झुकता हूँ। भोले नाथ, माया की प्रलोभन से मुझे बचाएं और मुझे शाश्वत सत्य की ओर गाइड करें।

जोड़े हुए हाथों और भक्ति से भरे हुए दिल के साथ,  हर हर महादेव!</p>
          </div>
          <div className='col-12 col-lg-6 my-3 d-flex justify-content-around align-items-center'>
            <img className='img formContainer p-0 w-75' src={temple1} alt="designer" />
          </div>
        </div>
      </div>
{/* 
      <div className='main-card-conatiner'>

        <div className='card-container-left'>
          <img className='images-container' src={temple1} alt="designer" />
          <div className='para-container'><p>भोले नाथ, अनन्त चेतना, अज्ञान के नाशक, और दया का स्वरूप, मैं आपको अपनी विनम्र प्रार्थना समर्पित करता हूँ। जटाधार विशाल केशवाला चंद्रमा और नगर की पवित्र गंगा के साथ, आप दिव्य कृपा के प्रतीक हैं। आपकी तीसरी आँख ज्ञान का प्रतीक है, जो धर्म का मार्ग प्रकाशित करती है। ध्यान और योग के शासक के रूप में, आप हमें आंतरिक शांति और ज्ञान की ओर प्रेरित करते हैं।

            ओह, महादेव, परमात्मा, मैं अपनी आत्मिक यात्रा पर आधारित बाधाओं को पार करने के लिए आपकी कृपा की मंगलकामना करता हूँ। मुझे शक्ति प्रदान करें कि संसारिक इच्छाओं को पार कर दिव्य सत्य को अपनाया जा सके। आपकी दिव्य उपस्थिति मेरे मन, शरीर, और आत्मा को शुद्ध करे, जो मुझे जन्म-मृत्यु के चक्र से मुक्ति की ओर ले जाए।

            कैलाश पर्वत के दिव्य निवास में, स्वर्गीय प्राणियों और दिव्य शांति से घिरे हुए, मैं आपके समक्ष श्रद्धापूर्वक झुकता हूँ। भोले नाथ, माया की प्रलोभन से मुझे बचाएं और मुझे शाश्वत सत्य की ओर गाइड करें।

            जोड़े हुए हाथों और भक्ति से भरे हुए दिल के साथ,  हर हर महादेव!</p></div>
        </div>

        <div className='card-container-right '>
          <img className='images-container' src={temple1} alt="designer" />
          <div className='para-container'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip e</p></div>
        </div>

        <div className='card-container-left'>
          <img className='images-container' src={temple1} alt="designer" />
          <div className='para-container'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip e</p></div>
        </div>

        <div className='card-container-right'>
          <img className='images-container' src={temple} alt="designer" />
          <div className='para-container'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip e</p></div>
        </div>

      </div> */}
    </div>
  )
}

export default CardSection