import styled from 'styled-components';

export const SiteHero = styled.section`
  z-index: 10;
  position: relative;
  h4 {
    color: #2c3e50;
    font-weight: 200 !important;
  }

  .site-section {
    padding: 80px 0;
  }
  .lead {
     font-weight: 200;
     line-height: 1.5;
  }
  .section-heading {
     position: relative;
     z-index: 10;
  }
  .svg-inline--fa {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
  
  .section-heading h2::before {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     height: 2px;
     width: 50px;
     background: #4b18a9;
  }

  .section-heading.text-center h2::before {
    left: 50%;
    transform: translateX(-50%);
  }

 .site-hero {
   height: 100vh;
   min-height: 800px;

   .row {
     height: 100vh;
     min-height: 800px;
     width: 100%;
   }
  
   .container {
     height: 100vh;
     align-items: center;
     display: flex;
     justify-content: center;
   }
  
   .social-item h1 {
     font-weight: 200;
   }
  
   .social-item {
     font-size: 50px !important;
     padding: 0 15px;
     /* color: #cf9c9c; */
   }
  
   .sub-heading {
     font-size: 40px;
     max-width: 640px;
     margin: 0 auto;
     color: rgba(105, 27, 252, 0.6);
   }
  
   .btn-primary {
     background-color: rgba(105, 27, 252, 0.6);
     border-color: rgba(105, 27, 252, 0.6);
   }
 }


  .aboutMe {

  }

  .skills {
    .icon-size {
      width: 50px;
      height: 50px;
    }
  }

  .site-service-item {
    color: #581aca;

    :hover {
      color: #eee;
    }
    
    .icon {
      transition: .5s;
      display: block;
      background: #eee;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto 30px;
      position: relative;

      span {
        font-size: 50px;
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
      }
    }

    .icon:hover {
      background: #581aca;
    }

    h3 {
    color: #fff;
    font-size: 30px;
    }

    .lead {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    }
  }

  .portfolio {
    .filters ul li {
      display: inline-block;
      cursor: pointer;
      padding: 20px;
      transition: .3s ease-in-out;
    }

    .filters ul li.active {
      color: #0389ff;
    }

    .row.grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 15px;
    }

    @media only screen and (max-width: 768px) {
      .row.grid {
        grid-template-columns: 1fr;
      }
    }

    .card {
      box-shadow: 0 10px 30px 10px rgba(255, 255, 255, 0.16);
      border: 0;
      padding: 0;
      transition: .5s;
    }
    .card:hover {
      box-shadow: 0px 10px 20px 3px #c1c1c1;
    }

    card img:first-child {
      /* width: 100%; */
      height: 250px;
    }
    .card-title {
      font-size: 15px;
      font-weight: bolder;
      color: #4e4e4e;
      text-transform: capitalize;
    }
    .card-text {
      font-size: 13px;
      color: #6f6f6f;
    }

  }

  .resume-item {
    padding: 40px;
    background: #fff;
    transition: .3s ease-in-out;
    border: 4px solid transparent;
    transition: .5s;

    img {
      width: 100px;
      height: 100px;
      float: right;
    }

    .facens {
      width: 160px !important;
    }
  
    h3 {
      color: #2c3e50;
    }
    h4 {
      color: #2c3e50;
      font-weight: 200;
    }
    p {
      color: #2c3e50;
    }
  }

  .resume-item .date, .resume-item .school {
    display: block;
    font-size: 15px;
    letter-spacing: 2px;
    color: #0389ff;
  }

  .resume-item:hover {
    border: 4px solid #0389ff;
    box-shadow: 0 15px 20px 10px rgba(0, 0, 0, .4);
    transform: translateY(-10px);
  }

  .skill h3 {
    font-size: 18px;
    font-weight: 200;
  }

  .progress {
    height: 10px;
    overflow: visible;

    .progress-bar {
      background-color: #0389ff;
      position: relative;
  
      span {
        position: absolute;
        right: -13px;
        bottom: -20px;
        background-color: #0389ff;
        font-size: 10px;
        line-height: 10px;
        padding: 2px 3px;
        border-radius: 2px;
      }
      span::after {
        content: " ";
        position: absolute;
        bottom: 100%;
        /* top: -10px; */
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-bottom-color: #0389ff;
      }
    }
  }


  @media (min-width: 768px) {
    margin-top: 0;

    h1 {
        font-size: 70px
    }
  }
`;
