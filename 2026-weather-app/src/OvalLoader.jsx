import React from 'react';
import { Oval } from 'react-loader-spinner';

export default function OvalLoader() {
       return(
       <div className="OvalLoader"><Oval
                    visible={true}
                    height="40"
                    width="40"
                    color="#3C6E71"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    /></div>
       )
}