import React from 'react';
import { SiteHero } from './styles'
import { useState } from "react";
import Isotope from 'isotope-layout';

export default function Section() {

    const [filter, setFilter] = useState('*');
    const [activeFilter, setActiveFilter] = useState('*');
    const [isotope, setIsotope] = useState<Isotope | null>(null);
  
    React.useEffect(() => {
      setIsotope(
        new Isotope('.grid', {
          itemSelector: '.all',
          percentPosition: true,
          masonry: { columnWidth: '.all' }
        })
      );
    }, []);
  
    React.useEffect(() => {
      if (isotope) {
        isotope.arrange({ filter });
      }
    }, [isotope, filter]);
  
    const handleFilterUpdate = (newFilter: React.SetStateAction<string>) => {
      setFilter(newFilter);
      setActiveFilter(newFilter);
    };

    return (
        <SiteHero>
            <section className='site-hero' id='Home'>
                <div className="container">
                    <div className="row intro-text align-items-center justify-content-center">
                        <div className="col-md-10 text-center">
                            <a href="https://www.linkedin.com/in/kaique-silva-3929b2217/" target='_blank' className='social-item' rel="noreferrer">
                                <span>
                                <svg width="60" height="60" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#691BFC" fillOpacity="0.6" d="M416 32H31.9C14.3 32 0 46.5 0 64.3V447.7C0 465.5 14.3 480 31.9 480H416C433.6 480 448 465.5 448 447.7V64.3C448 46.5 433.6 32 416 32ZM135.4 416H69V202.2H135.5V416H135.4ZM102.2 173C80.9 173 63.7 155.7 63.7 134.5C63.7 113.3 80.9 96 102.2 96C123.4 96 140.7 113.3 140.7 134.5C140.7 155.8 123.5 173 102.2 173ZM384.3 416H317.9V312C317.9 287.2 317.4 255.3 283.4 255.3C248.8 255.3 243.5 282.3 243.5 310.2V416H177.1V202.2H240.8V231.4H241.7C250.6 214.6 272.3 196.9 304.6 196.9C371.8 196.9 384.3 241.2 384.3 298.8V416Z" />
                                <path fill="#d6dfed" fillRule="evenodd" clipRule="evenodd" d="M69.3 202.2V416H135.7H135.8V202.2H69.3ZM64 134.5C64 155.7 81.2 173 102.5 173C123.8 173 141 155.8 141 134.5C141 113.3 123.7 96 102.5 96C81.2 96 64 113.3 64 134.5ZM318.2 416H384.6V298.8C384.6 241.2 372.1 196.9 304.9 196.9C272.6 196.9 250.9 214.6 242 231.4H241.1V202.2H177.4V416H243.8V310.2C243.8 282.3 249.1 255.3 283.7 255.3C317.7 255.3 318.2 287.2 318.2 312V416Z" />
                                </svg>
                                </span>
                            </a>
                            <a href="https://github.com/kaiquemsa" target="_blank" className="social-item" rel="noreferrer">
                                <span>
                                <svg width="60" height="60" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#d6dfed" fillRule="evenodd" clipRule="evenodd" d="M266 407.8C266 412.1 269.1 417.3 277.5 415.8C343.5 393.8 388.3 330.9 388.2 257.5C388.2 165.7 313.8 96 222 96C130.2 96 60 165.7 60 257.5C60 330.9 106.2 393.7 172.2 415.8C180.7 417.3 183.7 412.1 183.7 407.8C183.7 406.357 183.675 402.622 183.643 397.782C183.584 388.869 183.5 376.208 183.5 367.2C183.5 367.2 137.1 377.2 127.4 347.5C127.4 347.5 119.8 328.3 109 323.3C109 323.3 93.9 312.9 110.1 313.1C110.1 313.1 126.5 314.4 135.6 330.2C150.1 355.8 174.4 348.4 183.9 344.1C185.4 333.5 189.7 326.1 194.5 321.8C157.5 317.7 120.2 312.3 120.2 248.7C120.2 230.5 125.2 221.4 135.8 209.7C134 205.3 128.4 187.6 137.5 164.7C151.4 160.4 183.2 182.6 183.2 182.6C196.4 178.9 210.7 177 224.8 177C238.9 177 253.2 178.9 266.4 182.6C266.4 182.6 298.2 160.4 312.1 164.7C321.2 187.7 315.5 205.4 313.8 209.7C324.4 221.4 330.9 230.5 330.9 248.7C330.9 312.6 291.9 317.7 254.9 321.8C261 327 266.2 336.9 266.2 352.5C266.2 367.445 266.11 384.772 266.051 396.2C266.022 401.824 266 406.019 266 407.8ZM175.5 353C175.7 354.3 177.5 355.1 179.4 354.7C181.4 354.3 182.7 353 182.4 351.7C182.2 350.4 180.4 349.6 178.5 349.8C176.6 350.2 175.3 351.5 175.5 353ZM166.4 356.2C168.4 356.2 169.9 355.1 169.9 353.8C169.9 352.3 168.1 351.2 166.2 351.4C164.2 351.4 162.7 352.5 162.7 353.8C162.7 355.3 164.2 356.4 166.4 356.2ZM152.1 354C153.8 354.6 155.8 354 156.2 352.7C156.7 351.4 155.4 349.9 153.4 349.3C151.7 348.9 149.7 349.5 149.3 350.8C148.9 352.1 150.2 353.6 152.1 354ZM139.6 346.7C141.1 348.2 143 348.4 143.9 347.3C144.8 346.5 144.3 344.5 143 343.2C141.5 341.7 139.6 341.5 138.7 342.6C137.7 343.5 138.1 345.4 139.6 346.7ZM131.1 336.7C132.2 338.2 133.9 338.8 134.8 338.2C135.9 337.4 135.9 335.6 134.8 334.1C133.9 332.6 132.2 331.9 131.1 332.8C130 333.5 130 335.2 131.1 336.7ZM124.8 327.9C125.9 328.9 127.4 329.4 128.3 328.5C129.2 327.8 129 326.3 127.9 325C126.8 324 125.3 323.5 124.4 324.4C123.5 325.1 123.7 326.6 124.8 327.9ZM118.8 321.5C119.9 322.2 121.2 322 121.6 321.1C122 320.3 121.4 319.2 120.1 318.5C118.8 318 117.7 318.3 117.3 318.9C116.9 319.8 117.5 320.9 118.8 321.5Z" />
                                <path fill="#691BFC" fillOpacity="0.6" d="M400 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H400C426.5 480 448 458.5 448 432V80C448 53.5 426.5 32 400 32ZM277.3 415.7C268.9 417.2 265.8 412 265.8 407.7C265.8 402.3 266 374.7 266 352.4C266 336.8 260.8 326.9 254.7 321.7C291.7 317.6 330.7 312.5 330.7 248.6C330.7 230.4 324.2 221.3 313.6 209.6C315.3 205.3 321 187.6 311.9 164.6C298 160.3 266.2 182.5 266.2 182.5C253 178.8 238.7 176.9 224.6 176.9C210.5 176.9 196.2 178.8 183 182.5C183 182.5 151.2 160.3 137.3 164.6C128.2 187.5 133.8 205.2 135.6 209.6C125 221.3 120 230.4 120 248.6C120 312.2 157.3 317.6 194.3 321.7C189.5 326 185.2 333.4 183.7 344C174.2 348.3 149.9 355.7 135.4 330.1C126.3 314.3 109.9 313 109.9 313C93.7 312.8 108.8 323.2 108.8 323.2C119.6 328.2 127.2 347.4 127.2 347.4C136.9 377.1 183.3 367.1 183.3 367.1C183.3 381 183.5 403.6 183.5 407.7C183.5 412 180.5 417.2 172 415.7C106 393.6 59.8 330.8 59.8 257.4C59.8 165.6 130 95.9 221.8 95.9C313.6 95.9 388 165.6 388 257.4C388.1 330.8 343.3 393.7 277.3 415.7ZM179.2 354.6C177.3 355 175.5 354.2 175.3 352.9C175.1 351.4 176.4 350.1 178.3 349.7C180.2 349.5 182 350.3 182.2 351.6C182.5 352.9 181.2 354.2 179.2 354.6ZM169.7 353.7C169.7 355 168.2 356.1 166.2 356.1C164 356.3 162.5 355.2 162.5 353.7C162.5 352.4 164 351.3 166 351.3C167.9 351.1 169.7 352.2 169.7 353.7ZM156 352.6C155.6 353.9 153.6 354.5 151.9 353.9C150 353.5 148.7 352 149.1 350.7C149.5 349.4 151.5 348.8 153.2 349.2C155.2 349.8 156.5 351.3 156 352.6ZM143.7 347.2C142.8 348.3 140.9 348.1 139.4 346.6C137.9 345.3 137.5 343.4 138.5 342.5C139.4 341.4 141.3 341.6 142.8 343.1C144.1 344.4 144.6 346.4 143.7 347.2ZM134.6 338.1C133.7 338.7 132 338.1 130.9 336.6C129.8 335.1 129.8 333.4 130.9 332.7C132 331.8 133.7 332.5 134.6 334C135.7 335.5 135.7 337.3 134.6 338.1ZM128.1 328.4C127.2 329.3 125.7 328.8 124.6 327.8C123.5 326.5 123.3 325 124.2 324.3C125.1 323.4 126.6 323.9 127.7 324.9C128.8 326.2 129 327.7 128.1 328.4ZM121.4 321C121 321.9 119.7 322.1 118.6 321.4C117.3 320.8 116.7 319.7 117.1 318.8C117.5 318.2 118.6 317.9 119.9 318.4C121.2 319.1 121.8 320.2 121.4 321Z" />
                                </svg>
                                </span>
                            </a>
                            <h1 style={{ fontWeight: '200'}}>Hello, I'm <strong>Kaique Silva</strong></h1>
                            <p className="sub-heading font-weight-bold mb-4">FullStack Software Developer</p>
                            <p>
                                <a href="#About" className="smoothscroll btn btn-primary text-uppercase px-4 py-3">More On Me</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutMe site-section" id="About">
                <div className="container">
                    <div className="row mb-5 align-items-center">                        
                        <div className="picture col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                            <img src={process.env.PUBLIC_URL + '/aboutme_pic.jpg'} alt="placeholder" className="img-fluid rounded"/>
                        </div>
                        <div className="textMe col-lg-5 pl-lg-5">
                            <div className="section-heading">                              
                                <h2 className="pt-3 font-weight-lighter">
                                    About <strong>Me</strong>
                                </h2>
                            </div>
                            <p className="lead">
                                Driven by a continuous pursuit of knowledge and technological challenges, valuing teamwork and idea sharing.
                                My commitment is to deliver high-quality outcomes, constantly striving for improvement and staying updated with the
                                latest industry trends. In addition to my technical expertise, I possess strong interpersonal skills, enabling me to easily
                                adapt to different work environments and collaborate effectively with colleagues from various fields.
                            </p>
                            <p className="lead">
                                I am enthusiastic
                                about the prospects of applying my skills and experiences to the development of innovative technological solutions. I
                                am a dedicated professional, passionate about technology, and eager for knowledge. I am always ready to collaborate
                                and contribute to challenging projects that can add value and positive impact.
                            </p>
                            <p className="lead mb-5">
                                Also well-designed, testable and efficient code using current best practices in Web development.
                            </p>
                            <p>

                            </p>
                            <p>
                                <a href="#Contact" className="btn btn-primary text-uppercase px-4 py-2 btn-sm smoothscroll" style={{ marginRight: "10px"}}>Hire Me</a>
                                <a href={process.env.PUBLIC_URL + '/resume_kaique_silva.pdf'} className="btn btn-secondary text-uppercase px-4 py-2 btn-sm" download="Kaique_Silva_Resume" target="_blank" rel="noreferrer">
                                    Download CV&nbsp;&nbsp;&nbsp;
                                    <svg className="svg-inline--fa fa-download fa-w-16" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ width: "14px"}}>
                                        <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                    </svg>
                                </a>
                            </p>
                        </div>
                    </div>                    
                </div>
            </section>
            <section className="skills site-section" id="Skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="section-heading text-center">
                                <h2 className="pt-3 font-weight-lighter">My <strong>Skills</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="Git" src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"/>
                            <h6><strong>Git</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="GitHub" src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"/>
                            <h6><strong>GitHub</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="VSCode" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"/>
                            <h6><strong>VScode</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="HTML5" src="https://cdn.worldvectorlogo.com/logos/html-1.svg"/>
                            <h6><strong>HTML5</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="CSS3" src="https://cdn.worldvectorlogo.com/logos/css-3.svg"/>
                            <h6><strong>CSS3</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="SASS" src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"/>
                            <h6><strong>SASS</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="JavaScript" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"/>
                            <h6><strong>JavaScript</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="JQuery" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/jquery-512.png"/>
                            <h6><strong>JQuery</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="Bootstrap" src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"/>
                            <h6><strong>Bootstrap</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="JSON" src="https://cdn.worldvectorlogo.com/logos/json.svg"/>
                            <h6><strong>JSON</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="React.js" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>
                            <h6><strong>React.js</strong></h6>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="Redux" src="https://cdn.worldvectorlogo.com/logos/redux.svg"/>
                            <h6><strong>Redux</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="PostgreSQL" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"/>
                            <h6><strong>PostgreSQL</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="PostgreSQL" src="https://cdn.worldvectorlogo.com/logos/typescript.svg"/>
                            <h6><strong>Typescript</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="PostgreSQL" src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg"/>
                            <h6><strong>Firebase</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="PostgreSQL" src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"/>
                            <h6><strong>Angular</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="PostgreSQL" src="https://cdn.worldvectorlogo.com/logos/react-2.svg"/>
                            <h6><strong>React</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="MySQL" src="https://cdn.worldvectorlogo.com/logos/mysql-3.svg"/>
                            <h6><strong>MySQL</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="MongoDB" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"/>
                            <h6><strong>MongoDB</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="Node.js" src="https://image.winudf.com/v2/image1/Y29tLnNreWFwcGVyLmxlYXJubm9kZWpzX2ljb25fMTU1ODM1NzY4M18wMzI/icon.png?w=170&fakeurl=1"/>
                            <h6><strong>Node.js</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="NPM" src="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg"/>
                            <h6><strong>NPM</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="Swagger" src="https://miro.medium.com/max/720/0*ouOwqU23IiOAJf5v.jpg"/>
                            <h6><strong>Swagger</strong></h6>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-3 col-xs-6 mb-2 mx-auto">
                            <img className="icon-size" alt="GitHub Pages" src="https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512 "/>
                            <h6><strong>GitHub Pages</strong></h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services site-section" id="My-Services">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <div className="section-heading text-center">
                                <h2 className="pt-3 font-weight-lighter">My <strong>services</strong></h2>
                                <p className="lead text-white">
                                    <strong>I am offering a very special services and here are my main services</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-code w-20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">Web Develop</h3>
                                <p className="lead">
                                    Web development by build responsive websites using HTML5, CSS3, Bootstrap, JavaScript(jQuery), Calling API (Json, xml).
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-chart-line fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">SEO Optimization</h3>
                                <p className="lead">
                                    SEO initiatives elevating rankings on Google search engines.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-chrome fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chrome" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">Web Application</h3>
                                <p className="lead">
                                    Create, Build and Deploy apps using relational/No-relational database as a service with tools including Node.js.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-paint-brush fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paint-brush" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3-2.35 6.21-8 9.98-14.59 9.98-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19 0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03 62.11 0 98.11-45.47 211.16-256.46 7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">Animation</h3>
                                <p className="lead">
                                    Implementing visual elements and create animations that users see and interact with in a website.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-mobile-alt fa-w-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">Responsive Design</h3>
                                <p className="lead">
                                    Create a website that looks great on every device. Fully Customizable Web Templates and mobile optimized.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4  mb-5">
                            <div className="site-service-item">
                                <span className="icon">
                                    <span><svg className="svg-inline--fa fa-layer-group fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"></path></svg></span>
                                </span>
                                <h3 className="mb-4 font-weight-bold">E-commerce website</h3>
                                <p className="lead">
                                    Building an e-commerce website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="portfolio site-section" id="Portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-heading text-center col-md-12">
                            <h2 className="pt-3 font-weight-lighter">My <strong>Portfolio</strong></h2>
                            <p className="lead">
                                <strong>Some of My Awesome Previous Work in Web/Mobile Developing</strong>
                            </p>
                        </div>
                    </div>
                    <div className="filters text-center">
                        <ul className="mb-4">
                            <li className={activeFilter === '*' ? 'active' : ''} data-filter="*" onClick={() => handleFilterUpdate('*')}>All</li>
                            <li className={activeFilter === '.react' ? 'active' : ''} data-filter=".react" onClick={() => handleFilterUpdate('.react')}>React</li>
                            <li className={activeFilter === '.react-native' ? 'active' : ''} data-filter=".react-native" onClick={() => handleFilterUpdate('.react-native')}>React Native</li>
                        </ul>
                    </div>
                    <div className="filters-content mt-4">
                        <div className="row grid" style={{position: 'relative', height: '535px'}}>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 all react" style={{position: 'absolute', left: '0%', top: '0px'}}>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/samedu.png'} className="card-img-top" alt="Samedu Project"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Samedu Education</h5>
                                        <p className="card-text">
                                            Responsive React Template, built for a startup of education institution, landing page that contain information about them.<br/><br/><br/>
                                            <strong>REACT - STYLED COMPONENTS - TYPESCRIPT</strong>
                                        </p>
                                        <a href="https://github.com/kaiquemsa/Landing-Page" target="_blank" className="btn btn-primary" rel="noreferrer"><svg className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>&nbsp;source</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 all react" style={{position: 'absolute', left: '33.3319%', top: '0px'}}>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/uppy.png'} className="card-img-top" alt="Uppy Mockup"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Uppy Mockup</h5>
                                        <p className="card-text">
                                            E-commerce page built for a test using react, multiple pages, products page and information.<br/><br/><br/>
                                            <strong>REACT - STYLED COMPONENTS - TYPESCRIPT</strong>
                                        </p>
                                        <a href="https://github.com/kaiquemsa/Uppy_mockup" target="_blank" className="btn btn-primary" rel="noreferrer"><svg className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>&nbsp;source</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 all react-native" style={{position: 'absolute', left: '66.6639%', top: '0px'}}>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/youthprogress+.png'} className="card-img-top" alt="Youth Progress+ Project"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Youth Progress+</h5>
                                        <p className="card-text">
                                            React Native app built for the university to control student progress, with profile, dashboard page, using expo.<br/><br/><br/>
                                            <strong>REACT NATIVE - EXPO</strong>
                                        </p>
                                        <a href="https://github.com/kaiquemsa/YouthProgressPlus" target="_blank" className="btn btn-primary" rel="noreferrer"><svg className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>&nbsp;source</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="experience site-section" id="Experience">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-12 mb-5">
                            <div className="section-heading text-center">
                                <h2 className="pt-3 font-weight-lighter">My <strong>Experience</strong></h2>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-12">
                                <h2 className="my-4 font-weight-bold"><svg className="svg-inline--fa fa-university fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="university" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path></svg>&nbsp;&nbsp;Education</h2>
                            </div>
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> January 2021 - December 2025</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/logo-f-only.png'} alt=""/>
                                <h3><strong>B. in Computer Engineering</strong></h3>
                                <span className="school">Facens University</span>
                            </div>
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> August 2019 - June 2021</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/logo-etec_rubens_faria.png'} alt=""/>
                                <h3><strong>Diploma in Mechatronics Technician</strong></h3>
                                <span className="school">Etec - Rubens de Faria e Souza</span>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-12">
                                <h2 className="my-4 font-weight-bold"><svg className="svg-inline--fa fa-briefcase fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>&nbsp;&nbsp;Professional Experience</h2>
                            </div>
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> March 2022 - March 2024</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/logo-fit-letras.png'} alt=""/>
                                <h3 className="font-weight-bold">FIT - instituto de tecnologia</h3>
                                <h4><strong>Intern Software Developer</strong></h4>
                                <p>
                                    <strong>Tasks:</strong><br/> Preparing Take-Off for all materials required for the site; Installation and Cable termination of Distribution Panel Boards and maintenance activities; Installation of Earthing protection System
                                    for Structures. I have also worked for different projects in different capacities.
                                </p>
                                <span className="school">Sorocaba</span>
                            </div>
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> September 2021 - March 2022</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/logo-f-only.png'} alt=""/>
                                <h3 className="font-weight-bold">Facens</h3>
                                <h4><strong>Intern IT Support</strong></h4>
                                <p>
                                    <strong>Tasks:</strong><br/> Produce educational multimedia content including scientific experiments simulation and interactive exams and assessments using Microsoft Edge Animate Program and JavaScript Language for programming.
                                </p>
                                <span className="school">Sorocaba</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="courses site-section" id="Courses">
                <div className="container">
                    <div className="row m-0">
                    <div className="col-12 mb-5">
                            <div className="section-heading text-center">
                                <h2 className="pt-3 font-weight-lighter"><strong>Courses</strong> and <strong>Certificates</strong></h2>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> January 2021 - December 2025</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/udemy.png'} alt=""/>
                                <h3 className="font-weight-bold">Udemy courses</h3>
                                <h4><strong>Self Study</strong></h4>
                                <p>
                                    - React Native Criando aplicativos do zero ao avançado.<br/> 
                                    - PRO FIGMA | UI DESIGN com Figma do Zero ao especialista 2024.<br/> 
                                    - WordPress - Curso Como Criar Site com Design Moderno.<br/> 
                                    - Experienced with modern component frameworks such as ReactJS.<br/> 
                                    - Understanding of DOM specific technologies and templating engines like jQuery and HandlebarsJS.<br/> 
                                    - Understanding of CSS pre-processing, like SASS/SCSS.<br/> 
                                    - Conformity to using modern version control systems such as Git and GitHUB.<br/> 
                                    - Continuous integration and deployment platforms such as Herkou and Netlify.
                                </p>
                                <span className="school">Home</span>
                            </div>
                            <div className="col-md-6 col-sm-12 resume-item mb-4">
                                <span className="date mb-3 text-uppercase"><span><svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg></span> January 2021 - December 2025</span>
                                <img className="img-fluid" src={process.env.PUBLIC_URL + '/logo-fit-letras.png'} alt=""/>
                                <h3 className="font-weight-bold">Fit Tech Academy</h3>
                                <h4><strong>Trainee</strong></h4>
                                <p>
                                    - Elastic Stack.<br/> 
                                    - Desenvolvimento Web Blazor - Básico.<br/> 
                                    - Microsserviços - Arquitetura organizacional de software para pequenos serviços API.<br/> 
                                    - POO (Programação Orientada ao Objeto) e .NET 6.<br/> 
                                    - POO (Programação Orientada ao Objeto) e C#.<br/> 
                                </p>
                                <span className="school">FIT - Intituto de tecnologia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="language site-section" id="Languages">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <div className="section-heading text-center">
                                <h2 className="pt-3 font-weight-lighter"><strong>Langueges</strong></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-md-6 resume-item mb-4">
                            <h3 className="font-weight-bold">English</h3>
                            <h4><strong>Intermediate</strong></h4>
                            <div className="skill">
                                <h3>Listening</h3>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "84%" }} aria-valuenow={84} aria-valuemin={0} aria-valuemax={100}>
                                        <span>84%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>Speaking</h3>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "78%" }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}>
                                        <span>78%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>Reading</h3>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "91%" }} aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                                        <span>91%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>Writing</h3>
                                <div className="progress mb-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "86%" }} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100}>
                                        <span>86%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 resume-item mb-4">
                            <h3 className="font-weight-bold">Portuguese</h3>
                            <h4><strong>Mother tongue</strong></h4>
                        </div>
                    </div>
                </div>  
            </section>
            <section className="footer site-section" id="Contact">
                <div className="container">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2 className="pt-3 font-weight-lighter"><strong>Lets </strong>Work <strong>Togather Indeed</strong></h2>
                            <p className="lead">
                                Here you can find me. Ask me about anything or <strong> Hire me</strong>.<br/>Feel Free to Contact Me
                            </p>
                        </div>
                    </div>
                    <div className="row mb-5 text-center">
                        <div className="col-md-4">
                            <span className="d-block mb-3 font-weight-bold text-uppercase">Email</span>
                            <svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>&nbsp;&nbsp;
                            <a href="#email" className="__cf_email__">kaiquemeira@hotmail.com</a>
                        </div>
                        <div className="col-md-4">
                            <span className="d-block mb-3 font-weight-bold text-uppercase">Phone</span>
                            <svg className="svg-inline--fa fa-phone-alt fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>&nbsp;&nbsp; +55 (15)99754-6273
                        </div>
                        <div className="col-md-4">
                            <span className="d-block mb-3 font-weight-bold text-uppercase">Address</span>
                            <svg className="svg-inline--fa fa-map-marker-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>&nbsp;&nbsp; Sorocaba — SP
                        </div>
                    </div>
                    <div className="col-md-12 text-center icon_container" style={{display: "flex", justifyContent: "center", gap: "85px"}}>
                        <a href="https://www.linkedin.com/in/kaique-silva-3929b2217/" target='_blank' className='social-item' rel="noreferrer">
                            <span>
                            <svg className="icon_footer" width="100" height="100" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#691BFC" fillOpacity="0.8" d="M416 32H31.9C14.3 32 0 46.5 0 64.3V447.7C0 465.5 14.3 480 31.9 480H416C433.6 480 448 465.5 448 447.7V64.3C448 46.5 433.6 32 416 32ZM135.4 416H69V202.2H135.5V416H135.4ZM102.2 173C80.9 173 63.7 155.7 63.7 134.5C63.7 113.3 80.9 96 102.2 96C123.4 96 140.7 113.3 140.7 134.5C140.7 155.8 123.5 173 102.2 173ZM384.3 416H317.9V312C317.9 287.2 317.4 255.3 283.4 255.3C248.8 255.3 243.5 282.3 243.5 310.2V416H177.1V202.2H240.8V231.4H241.7C250.6 214.6 272.3 196.9 304.6 196.9C371.8 196.9 384.3 241.2 384.3 298.8V416Z" />
                            <path fill="#d6dfed" fillRule="evenodd" clipRule="evenodd" d="M69.3 202.2V416H135.7H135.8V202.2H69.3ZM64 134.5C64 155.7 81.2 173 102.5 173C123.8 173 141 155.8 141 134.5C141 113.3 123.7 96 102.5 96C81.2 96 64 113.3 64 134.5ZM318.2 416H384.6V298.8C384.6 241.2 372.1 196.9 304.9 196.9C272.6 196.9 250.9 214.6 242 231.4H241.1V202.2H177.4V416H243.8V310.2C243.8 282.3 249.1 255.3 283.7 255.3C317.7 255.3 318.2 287.2 318.2 312V416Z" />
                            </svg>
                            </span>
                        </a>
                        <a href="https://github.com/kaiquemsa" target="_blank" className="social-item" rel="noreferrer">
                            <span>
                            <svg className="icon_footer" width="100" height="100" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#d6dfed" fillRule="evenodd" clipRule="evenodd" d="M266 407.8C266 412.1 269.1 417.3 277.5 415.8C343.5 393.8 388.3 330.9 388.2 257.5C388.2 165.7 313.8 96 222 96C130.2 96 60 165.7 60 257.5C60 330.9 106.2 393.7 172.2 415.8C180.7 417.3 183.7 412.1 183.7 407.8C183.7 406.357 183.675 402.622 183.643 397.782C183.584 388.869 183.5 376.208 183.5 367.2C183.5 367.2 137.1 377.2 127.4 347.5C127.4 347.5 119.8 328.3 109 323.3C109 323.3 93.9 312.9 110.1 313.1C110.1 313.1 126.5 314.4 135.6 330.2C150.1 355.8 174.4 348.4 183.9 344.1C185.4 333.5 189.7 326.1 194.5 321.8C157.5 317.7 120.2 312.3 120.2 248.7C120.2 230.5 125.2 221.4 135.8 209.7C134 205.3 128.4 187.6 137.5 164.7C151.4 160.4 183.2 182.6 183.2 182.6C196.4 178.9 210.7 177 224.8 177C238.9 177 253.2 178.9 266.4 182.6C266.4 182.6 298.2 160.4 312.1 164.7C321.2 187.7 315.5 205.4 313.8 209.7C324.4 221.4 330.9 230.5 330.9 248.7C330.9 312.6 291.9 317.7 254.9 321.8C261 327 266.2 336.9 266.2 352.5C266.2 367.445 266.11 384.772 266.051 396.2C266.022 401.824 266 406.019 266 407.8ZM175.5 353C175.7 354.3 177.5 355.1 179.4 354.7C181.4 354.3 182.7 353 182.4 351.7C182.2 350.4 180.4 349.6 178.5 349.8C176.6 350.2 175.3 351.5 175.5 353ZM166.4 356.2C168.4 356.2 169.9 355.1 169.9 353.8C169.9 352.3 168.1 351.2 166.2 351.4C164.2 351.4 162.7 352.5 162.7 353.8C162.7 355.3 164.2 356.4 166.4 356.2ZM152.1 354C153.8 354.6 155.8 354 156.2 352.7C156.7 351.4 155.4 349.9 153.4 349.3C151.7 348.9 149.7 349.5 149.3 350.8C148.9 352.1 150.2 353.6 152.1 354ZM139.6 346.7C141.1 348.2 143 348.4 143.9 347.3C144.8 346.5 144.3 344.5 143 343.2C141.5 341.7 139.6 341.5 138.7 342.6C137.7 343.5 138.1 345.4 139.6 346.7ZM131.1 336.7C132.2 338.2 133.9 338.8 134.8 338.2C135.9 337.4 135.9 335.6 134.8 334.1C133.9 332.6 132.2 331.9 131.1 332.8C130 333.5 130 335.2 131.1 336.7ZM124.8 327.9C125.9 328.9 127.4 329.4 128.3 328.5C129.2 327.8 129 326.3 127.9 325C126.8 324 125.3 323.5 124.4 324.4C123.5 325.1 123.7 326.6 124.8 327.9ZM118.8 321.5C119.9 322.2 121.2 322 121.6 321.1C122 320.3 121.4 319.2 120.1 318.5C118.8 318 117.7 318.3 117.3 318.9C116.9 319.8 117.5 320.9 118.8 321.5Z" />
                            <path fill="#691BFC" fillOpacity="0.8" d="M400 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H400C426.5 480 448 458.5 448 432V80C448 53.5 426.5 32 400 32ZM277.3 415.7C268.9 417.2 265.8 412 265.8 407.7C265.8 402.3 266 374.7 266 352.4C266 336.8 260.8 326.9 254.7 321.7C291.7 317.6 330.7 312.5 330.7 248.6C330.7 230.4 324.2 221.3 313.6 209.6C315.3 205.3 321 187.6 311.9 164.6C298 160.3 266.2 182.5 266.2 182.5C253 178.8 238.7 176.9 224.6 176.9C210.5 176.9 196.2 178.8 183 182.5C183 182.5 151.2 160.3 137.3 164.6C128.2 187.5 133.8 205.2 135.6 209.6C125 221.3 120 230.4 120 248.6C120 312.2 157.3 317.6 194.3 321.7C189.5 326 185.2 333.4 183.7 344C174.2 348.3 149.9 355.7 135.4 330.1C126.3 314.3 109.9 313 109.9 313C93.7 312.8 108.8 323.2 108.8 323.2C119.6 328.2 127.2 347.4 127.2 347.4C136.9 377.1 183.3 367.1 183.3 367.1C183.3 381 183.5 403.6 183.5 407.7C183.5 412 180.5 417.2 172 415.7C106 393.6 59.8 330.8 59.8 257.4C59.8 165.6 130 95.9 221.8 95.9C313.6 95.9 388 165.6 388 257.4C388.1 330.8 343.3 393.7 277.3 415.7ZM179.2 354.6C177.3 355 175.5 354.2 175.3 352.9C175.1 351.4 176.4 350.1 178.3 349.7C180.2 349.5 182 350.3 182.2 351.6C182.5 352.9 181.2 354.2 179.2 354.6ZM169.7 353.7C169.7 355 168.2 356.1 166.2 356.1C164 356.3 162.5 355.2 162.5 353.7C162.5 352.4 164 351.3 166 351.3C167.9 351.1 169.7 352.2 169.7 353.7ZM156 352.6C155.6 353.9 153.6 354.5 151.9 353.9C150 353.5 148.7 352 149.1 350.7C149.5 349.4 151.5 348.8 153.2 349.2C155.2 349.8 156.5 351.3 156 352.6ZM143.7 347.2C142.8 348.3 140.9 348.1 139.4 346.6C137.9 345.3 137.5 343.4 138.5 342.5C139.4 341.4 141.3 341.6 142.8 343.1C144.1 344.4 144.6 346.4 143.7 347.2ZM134.6 338.1C133.7 338.7 132 338.1 130.9 336.6C129.8 335.1 129.8 333.4 130.9 332.7C132 331.8 133.7 332.5 134.6 334C135.7 335.5 135.7 337.3 134.6 338.1ZM128.1 328.4C127.2 329.3 125.7 328.8 124.6 327.8C123.5 326.5 123.3 325 124.2 324.3C125.1 323.4 126.6 323.9 127.7 324.9C128.8 326.2 129 327.7 128.1 328.4ZM121.4 321C121 321.9 119.7 322.1 118.6 321.4C117.3 320.8 116.7 319.7 117.1 318.8C117.5 318.2 118.6 317.9 119.9 318.4C121.2 319.1 121.8 320.2 121.4 321Z" />
                            </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </SiteHero>
    );
}
