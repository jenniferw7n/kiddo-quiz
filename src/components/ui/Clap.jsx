// import { useState } from 'react';
// import { useSpring, animated } from '@react-spring/web';

// const Clap = () => {
//     const [clap, setClap] = useState(false);

//     const props = useSpring({
//       to: { scale: clap ? 1.2 : 1 },
//       config: { duration: 500 },
//       reset: true,
//       onRest: () => setClap(false),
//     });
  
//     const handleClick = () => {
//       setClap(true);
//     };
    

//     return ( 
//         <div className="clap">
//         <animated.button
//           style={{
//             ...props,
//             backgroundColor: '#ffcc00',
//             border: 'none',
//             padding: '10px 20px',
//             borderRadius: '5px',
//             fontSize: '16px',
//             cursor: 'pointer',
//           }}
//           onClick={handleClick}
//         >
//           👏 Clap!
//         </animated.button>
//       </div>
//      );
// }
 
// export default Clap;