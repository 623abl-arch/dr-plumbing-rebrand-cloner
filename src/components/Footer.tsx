import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
const Footer = () => {
  return <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src={logoDark} alt="Dr. Plumbing" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional plumbing services you can trust. Licensed, insured, and veteran-owned.
            </p>
          </div>

          <nav aria-label="Services">
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/emergency" className="hover:text-primary transition-colors">Emergency Plumbing</Link></li>
              <li><Link to="/services/drain" className="hover:text-primary transition-colors">Drain Services</Link></li>
              <li><Link to="/services/water-heater" className="hover:text-primary transition-colors">Water Heater</Link></li>
              <li><Link to="/services/water-treatment" className="hover:text-primary transition-colors">Water Treatment</Link></li>
              <li><Link to="/services/gas" className="hover:text-primary transition-colors">Gas Line Services</Link></li>
              <li><Link to="/services/re-pipe" className="hover:text-primary transition-colors">Re-Piping</Link></li>
            </ul>
          </nav>

          <nav aria-label="More Services">
            <h4 className="text-sm font-semibold mb-4">More Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/fixture-installation" className="hover:text-primary transition-colors">Fixture Installation</Link></li>
              <li><Link to="/services/pipe-repair" className="hover:text-primary transition-colors">Pipe Repair</Link></li>
              <li><Link to="/services/leak-detection" className="hover:text-primary transition-colors">Leak Detection</Link></li>
              <li><Link to="/services/video-inspection" className="hover:text-primary transition-colors">Video Inspection</Link></li>
              <li><Link to="/services/sewer" className="hover:text-primary transition-colors">Sewer Services</Link></li>
              <li><Link to="/services/maintenance-plans" className="hover:text-primary transition-colors">Maintenance Plans</Link></li>
            </ul>
          </nav>

          <nav aria-label="Service Areas">
            <h4 className="text-sm font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/locations/clearwater" className="hover:text-primary transition-colors">Clearwater</Link></li>
              <li><Link to="/locations/tampa" className="hover:text-primary transition-colors">Tampa</Link></li>
              <li><Link to="/locations/largo" className="hover:text-primary transition-colors">Largo</Link></li>
              <li><Link to="/locations/dunedin" className="hover:text-primary transition-colors">Dunedin</Link></li>
              <li><Link to="/locations/palm-harbor" className="hover:text-primary transition-colors">Palm Harbor</Link></li>
              <li><Link to="/locations/oldsmar" className="hover:text-primary transition-colors">Oldsmar</Link></li>
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:727-755-7000" className="hover:text-primary transition-colors">
                  (727) 755-7000
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:help@dr.plumbing" className="hover:text-primary transition-colors">
                  help@dr.plumbing
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <address className="not-italic">1505 Maple St.
Clearwater, FL 33755<br />Clearwater, FL 33767</address>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link>
              <span className="mx-2 text-muted-foreground">•</span>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dr. Plumbing. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;