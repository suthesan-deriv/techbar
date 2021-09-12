import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Icon from '../../images/feature-tile-icon-02.svg'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: `We've got you covered always in all ways!`,
    paragraph: `We provide a wide array of professional and reliable computer services. We're confident that we have just the solution you're looking for - at the convenience of your doorstep!`
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Computer Repairs - Desktop & Laptop
                    </h4>
                  <p className="m-0 text-sm">
                    &#8226; Boot Issues <br/>
                    &#8226; System Slowing Down/Freezing <br/>
                    &#8226; Networking Issues <br/>
                    &#8226; Virus Removal <br/>
                    &#8226; Screen Damage <br/>
                    &#8226; Motherboard Damage <br/>
                    &#8226; Audio Issues <br/>
                    &#8226; Overheating <br/>
                    &#8226; BSOD (Windows) <br/>
                    &#8226; Faulty Keypads <br/>
                    &#8226; Faulty Trackpads <br/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Hardware Installations, Upgrades & Consultations
                    </h4>
                  <p className="m-0 text-sm">
                  &#8226; Motherboard Installations & Upgrades <br/>
                  &#8226; Processor Installations & Upgrades <br/>
                  &#8226; HDD/SSD Installations & Upgrades <br/>
                  &#8226; RAM Installations & Upgrades <br/>
                  &#8226; Graphics Card Installations & Upgrades <br/>
                  &#8226; WiFi/Bluetooth Card Installations & Upgrades <br/>
                  &#8226; System Fan Installations & Upgrades <br/>
                  &#8226; Internal System Cleaning <br/>
                  &#8226; General Hardware Upgrade Consultations <br/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Software Installations, Updates & Consultations
                    </h4>
                  <p className="m-0 text-sm">
                  &#8226; Operating System Installations & Reformating (Mac, Windows & Linux) <br/>
                  &#8226; Microsoft Office Installations & Updates <br/>
                  &#8226; Antivirus Installations <br/>
                  &#8226; Driver Installations & Updates <br/>
                  &#8226; System Utilities/Tools Installations <br/>
                  &#8226; New Desktop/Laptop Setups <br/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Networking and Router Setups
                    </h4>
                  <p className="m-0 text-sm">
                  &#8226; Home Network Setups <br/>
                  &#8226; Router Configurations <br/>
                  &#8226; Increasing WiFi Coverage <br/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Data Recovery & Backup
                    </h4>
                  <p className="m-0 text-sm">
                  &#8226; Hard Drives <br/>
                  &#8226; Pen Drives <br/>
                  &#8226; SD/Micro SD Cards <br/>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={Icon}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Computer & IT Peripheral Purchase Consultations
                    </h4>
                  <p className="m-0 text-sm">
                  &#8226; New Computer Purchase Consultations <br/>
                  &#8226; IT Accesories Purchase Consultations <br/>
                  &#8226; Purchase Assistance <br/>
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;