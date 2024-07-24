

const Features = () => {

  return (
    <section id="features" className="features section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Features</h2>
          <p>Discover our features that make your life easier</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-briefcase"></i></div>
            <h4 className="title"><a href="">Use of Customer Portal with Master Login</a></h4>
            <p className="description">Access your account with a master login for centralized management.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Customer Portal Access for Site Managers</a></h4>
            <p className="description">Allow site managers to access the customer portal for better management.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-bar-chart"></i></div>
            <h4 className="title"><a href="">Add your logo</a></h4>
            <p className="description">Customize the interface by adding your company logo.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-binoculars"></i></div>
            <h4 className="title"><a href="">Text Messaging Crawl</a></h4>
            <p className="description">Engage your audience with a scrolling text message feature.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-brightness-high"></i></div>
            <h4 className="title"><a href="">Banner Ads</a></h4>
            <p className="description">Monetize your platform with integrated banner ads.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box">
            <div className="icon"><i className="bi bi-calendar4-week"></i></div>
            <h4 className="title"><a href="">Add your videos as needed</a></h4>
            <p className="description">Enhance your content by adding your own videos.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
