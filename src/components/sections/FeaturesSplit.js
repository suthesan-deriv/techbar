import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ContactUs from '../../assets/images/contact_us.jpeg'
import PickUp from '../../assets/images/pickup.jpeg'
import Repair from '../../assets/images/repair.jpeg'
import Delivery from '../../assets/images/delivery.jpeg'


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Road to getting your service',
    paragraph: 'Convenience lies at the heart of the services we provide. As such, we have an easy and streamlined process to ensure that you get your needed assistance as quick and easy as possible.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  FIRST,
                  </div>
                <h3 className="mt-0 mb-12">
                  Reach out for us
                  </h3>
                <p className="m-0">
                <a className="text-color-primary" href="tel:0133239856">Call us</a> now or just drop us an email at <a href="mailto:techbarmy@gmail.com">techbarmy@gmail.com</a>. One of our technicians will get back to you within 24 hours with a solution for your issue and a quotation.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={ContactUs}
                  alt="Contact us"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Then,
                  </div>
                <h3 className="mt-0 mb-12">
                  We'll arrange for pickup
                  </h3>
                <p className="m-0">
                  Upon agreeing on the quotation, our technicians will arrange to pickup your device - totally no need for you to leave the comfort of your home!. For consultation related issues, we will set up a meeting date.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={PickUp}
                  alt="Pickup"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  AFTER WHICH,
                  </div>
                <h3 className="mt-0 mb-12">
                  We'll sort out your issues
                  </h3>
                <p className="m-0">
                  Our technicians will provide you with the requested services. Wether it be fixing, upgrading or building your machine, or providing you with consultations, you'll be in hands of experts. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={Repair}
                  alt="Repair"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Finally,
                  </div>
                <h3 className="mt-0 mb-12">
                  We'll deliver your device
                  </h3>
                <p className="m-0">
                  We will let you know when your machine is ready for delivery, and our people will get it sent to your doorstep. Payment can be made after the service is completed. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={Delivery}
                  alt="Delivery"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;