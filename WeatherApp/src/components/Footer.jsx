import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-10 bg-slate-50 border-t border-slate-200 text-slate-600">
            <hr className="border-slate-200 mb-6" />
            <div>
                {/* Bottom Section: Copyright and Assessment Note */}
                <div className="flex  justify-evenly items-end gap-4 text-xs tracking-wide uppercase">
                    <p>
                        Copyright Qasim-haleem &copy; {currentYear} All Rights Reserved.
                    </p>

                    <p className="italic font-medium text-slate-600">
                        Handcrafted for your assessment & review.
                    </p>

                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">GitHub</Link>
                        <Link href="#" className="hover:underline">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer >

    );
};

export default Footer;