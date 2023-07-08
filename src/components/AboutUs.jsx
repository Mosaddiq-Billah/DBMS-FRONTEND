import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="https://www.dreamhost.com/blog/wp-content/uploads/2020/11/The-Perfect-About-Us-Page-Feature-730x486.jpg" className="img-fluid rounded" alt="About Us" />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className="fw-bold mb-4">About Us</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet lectus eget est vulputate tincidunt.
              Maecenas luctus erat nec mauris malesuada, et faucibus justo hendrerit. Aenean in sapien vel magna congue vulputate.
              Nullam eget bibendum mauris, id interdum lectus.
            </p>
            <p className="mb-4">
              Vestibulum nec sagittis sem, ac vestibulum mi. Sed ac est sed mi maximus lacinia. Quisque nec leo sed ligula
              eleifend ullamcorper. Curabitur vitae nulla sed felis tempor ultricies. Sed efficitur tristique ligula in
              dapibus. Nam eu justo sed lorem luctus sagittis.
            </p>
            <p>
              Integer varius ex at orci volutpat, nec pharetra elit finibus. Curabitur nec lectus sed orci venenatis
              venenatis. Mauris tincidunt euismod elit, in ullamcorper tellus imperdiet vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
