import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mt-[150px]'>
            <div className='md:flex md:justify-between ml-8 mr-8'>
                <div>
                    <Link to={'/'}>
                        <h1 className='text-2xl sm:text-3xl md:text-2xl xl:text-3xl font-semibold font-montserrat mb-2 animate-pulse'>CINEVERS</h1>
                    </Link>
                    <p className=' text-gray-400'>Your ultimate movie experience.</p>
                </div>
                <div className='flex gap-6 mt-10'>
                    <div className=' cursor-pointer hover:animate-bounce'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'><title>ins_line</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Brand' transform='translate(-288.000000, -0.000000)'><g id='ins_line' transform='translate(288.000000, 0.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M16,3 C18.7614,3 21,5.23858 21,8 L21,16 C21,18.7614 18.7614,21 16,21 L8,21 C5.23858,21 3,18.7614 3,16 L3,8 C3,5.23858 5.23858,3 8,3 L16,3 Z M16,5 L8,5 C6.34315,5 5,6.34315 5,8 L5,16 C5,17.6569 6.34315,19 8,19 L16,19 C17.6569,19 19,17.6569 19,16 L19,8 C19,6.34315 17.6569,5 16,5 Z M12,8 C14.2091,8 16,9.79086 16,12 C16,14.2091 14.2091,16 12,16 C9.79086,16 8,14.2091 8,12 C8,9.79086 9.79086,8 12,8 Z M12,10 C10.8954,10 10,10.8954 10,12 C10,13.1046 10.8954,14 12,14 C13.1046,14 14,13.1046 14,12 C14,10.8954 13.1046,10 12,10 Z M16.5,6.5 C17.0523,6.5 17.5,6.94772 17.5,7.5 C17.5,8.05228 17.0523,8.5 16.5,8.5 C15.9477,8.5 15.5,8.05228 15.5,7.5 C15.5,6.94772 15.9477,6.5 16.5,6.5 Z' id='形状' fill='#FFFFFFFF'></path></g></g></g></svg>
                    </div>
                    <div className=' cursor-pointer hover:animate-bounce'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'><title>facebook_line</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Brand' transform='translate(-240.000000, -0.000000)'><g id='facebook_line' transform='translate(240.000000, 0.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M4,12 C4,7.58172 7.58172,4 12,4 C16.4183,4 20,7.58172 20,12 C20,16.0796 16.9463,19.446 13,19.9381 L13,14 L15,14 C15.5523,14 16,13.5523 16,13 C16,12.4477 15.5523,12 15,12 L13,12 L13,10 C13,9.44772 13.4477,9 14,9 L14.5,9 C15.0523,9 15.5,8.55228 15.5,8 C15.5,7.44772 15.0523,7 14.5,7 L14,7 C12.3431,7 11,8.34315 11,10 L11,12 L9,12 C8.44772,12 8,12.4477 8,13 C8,13.5523 8.44772,14 9,14 L11,14 L11,19.9381 C7.05369,19.446 4,16.0796 4,12 Z M12,22 C17.5228,22 22,17.5228 22,12 C22,6.47715 17.5228,2 12,2 C6.47715,2 2,6.47715 2,12 C2,17.5228 6.47715,22 12,22 Z' id='形状' fill='#FFFFFFFF'></path></g></g></g></svg>
                    </div>
                    <div className=' cursor-pointer hover:animate-bounce'>
                        <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'><title>twitter_line</title><g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Brand' transform='translate(-768.000000, -0.000000)'><g id='twitter_line' transform='translate(768.000000, 0.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M17.8171,6.98899 C17.4641,6.48074 16.5202,5.76743 14.991,6.07458 C14.0994,6.25368 13.5659,6.69571 13.2269,7.27725 C12.8657,7.89668 12.6912,8.73972 12.6912,9.72114 C12.6912,10.2734 12.2435,10.7211 11.6912,10.7211 C9.32512,10.7211 7.07321,10.0185 5.17819,8.11692 C5.05529,8.80098 4.96954,9.61379 5.01021,10.4566 C5.06261,11.5426 5.3223,12.6322 5.93722,13.5652 C6.54164,14.4823 7.53719,15.3224 9.20065,15.8497 C9.53233,15.9548 9.78552,16.2248 9.86916,16.5625 C9.95281,16.9002 9.85489,17.2572 9.61061,17.505 C9.01965,18.1044 8.42529,18.554 7.81459,18.9099 C8.87536,19.0196 9.89712,19.0276 10.8447,18.9419 C12.7643,18.7683 14.2936,18.2189 15.25,17.4428 C17.2626,15.8096 18.3404,13.3759 18.1394,9.29825 C18.1064,8.62723 18.7526,7.90478 19.0647,7.35616 C18.5938,7.44421 18.1218,7.42772 17.8171,6.98899 Z M4.59375,4.98379 C4.9629,4.94076 5.32546,5.10599 5.53516,5.41282 C7.01054,7.57163 8.78262,8.46969 10.7489,8.67401 C10.8454,7.83282 11.0724,7.00167 11.4991,6.26991 C12.125,5.19626 13.143,4.40582 14.5972,4.11374 C16.6066,3.71014 18.1366,4.43784 19.0244,5.32905 L20.8162,4.99409 C21.199,4.92255 21.5884,5.07965 21.8144,5.39673 C22.0403,5.71381 22.0617,6.13321 21.8691,6.47162 L20.1496,9.4937 C20.3064,13.8551 19.0944,16.8988 16.5103,18.9958 C15.1395,20.1081 13.178,20.739 11.0249,20.9338 C8.85497,21.1301 6.40214,20.8927 3.96382,20.1807 C3.53604,20.0558 3.24254,19.6629 3.24412,19.2173 C3.24569,18.7716 3.54195,18.3808 3.9706,18.2589 C5.19682,17.9102 6.13012,17.6087 6.97377,17.0822 C5.77531,16.4459 4.89225,15.6141 4.26726,14.6658 C3.39859,13.3477 3.07648,11.8783 3.01253,10.553 C2.94859,9.22784 3.14009,8.00048 3.34178,7.11465 C3.45659,6.61039 3.59069,6.10378 3.77553,5.61983 C3.90978,5.27103 4.22461,5.02683 4.59375,4.98379 Z' id='形状' fill='#FFFFFFFF'></path></g></g></g></svg>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-500 my-4 ml-8 mr-8'></div>
            <div className=' flex justify-center space-x-4 mt-6'>
                <Link
                    to='/privacy'
                    className='text-gray-400 hover:text-white'
                >
                    Privacy Policy
                </Link>
                <Link
                    to='/privacy'
                    className='text-gray-400 hover:text-white'
                >
                    Terms of Use
                </Link>
                <Link
                    to='/privacy'
                    className='text-gray-400 hover:text-white'
                >
                    Help
                </Link>
            </div>
            <div className='container mx-auto text-center mt-6 mb-6'>
                <p className='text-gray-400'>
                    &copy; {new Date().getFullYear()} Cinevers. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer