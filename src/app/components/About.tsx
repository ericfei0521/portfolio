const About = () => {
    return (
        <section id="about" className="pt-20">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Education</h2>
                <div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className=" p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <p className="font-medium">Vancouver Film School</p>
                            <p className="text-sm text-white/60">3D Animation & Visual Effects, 2017-2018</p>
                        </div>

                        <div className=" p-6 rounded-lg hover:bg-white/10 transition-colors">
                            <p className="font-medium">Tamkang University</p>
                            <p className="text-sm text-white/60">Civil Engineering, 2010-2014</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
