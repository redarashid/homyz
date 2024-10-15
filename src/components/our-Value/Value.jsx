// import React from 'react'
// import './Value.css'
// import Accordion from 'react-bootstrap/Accordion';


// const Value = () => {
//   return (
//     <div>
//     <section className='c-wrapper'>
//     <div className='paddings innerWidth v-container'>
//         <div className='v-left'>
//             <div className='image-container'>
//                 <img src='../../images/value.png' alt='value'/>
//             </div>
//         </div>

//         <div className='flexColStart v-right'>
//             <span className='orangeText'>Our Value</span>
//             <span className=' PrimaryText'>Value We Give to You</span>
//             <span className='secondaryText'>We always ready to help by providijng the best services for you.<br/>
//             We beleive a good blace to live can make your life better</span>
            

//             <Accordion defaultActiveKey="0">
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>Mexant Financial Planning</Accordion.Header>
//         <Accordion.Body>
//         <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free.</p>
//         <br/>
//         <p>We do not ask you anything in return. You are free to use our templates for any purpose.</p>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Mexant Crypto Investing</Accordion.Header>
//         <Accordion.Body>
//         <p>Mexant HTML5 Template is available to download 100% free of charge. This CSS layout is based on Boostrap 5 framework.</p>
//         <br/>
//         <p>Anyone can edit and use this layout for all professional websites. Thank you for visiting TemplateMo website.</p>
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="2">
//         <Accordion.Header>Cryptocurrency Investments</Accordion.Header>
//         <Accordion.Body>
//         <p>Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.</p>
//         <br/>
//         <p>Integer sed lorem sapien. Ut viverra mauris sed lobortis commodo. Mauris scelerisque venenatis justo, sed interdum sem.</p>
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//         </div>

//     </div>
//     </section>
//     </div>
//   )
// }

// export default Value








import './Value.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utlis/accordion'



const Value = () => {
  return (
    <div>
      <section className='c-wrapper'>
        <div className='paddings innerWidth v-container'>
          <div className='v-left'>
            <div className='image-container'>
              <img src='../../images/value.png' alt='Value illustration' />
            </div>
          </div>

          <div className='flexColStart v-right'>
            <span className='orangeText'>Our Value</span>
            <span className='PrimaryText'>Value We Give to You</span>
            <span className='secondaryText'>
              We are always ready to help by providing the best services for you.<br />
              We believe a good place to live can make your life better.
            </span>

            <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}>
              {data.map((item, i)=> {

                return (
                  <AccordionItem className= 'accordionItem'  key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionItemButton'>



                        <div className='flexCenter icon'>{item.icon}</div>
                        <span className='primaryText'>
                          {item.heading}
                        </span>
                        <div className='flexCenter icon'>
                          <MdOutlineArrowDropDown size={20}/>
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                      <p className='secondaryText'>{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
