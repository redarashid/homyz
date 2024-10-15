
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
      <section id='Value' className='c-wrapper'>
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
