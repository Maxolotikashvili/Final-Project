"use strict";(self.webpackChunkSocial=self.webpackChunkSocial||[]).push([[592],{2724:(l,a,r)=>{r.d(a,{P:()=>n});var c=r(262),u=r(2843),e=r(1223),o=r(520);let n=(()=>{class s{constructor(t){this.http=t,this.url="https://jsonplaceholder.typicode.com/posts"}getPost(){return this.http.get(this.url).pipe((0,c.K)(t=>this.handleError(t)))}writePost(t){return this.http.post(this.url,t)}handleError(t){return 0===t.status?console.error("An Error Occurred:",t.error):console.error(`Service Returned Code: ${t.status}, Body Was:`,t.error),(0,u._)("Something happened; please Try Again Later.")}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(o.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},7742:(l,a,r)=>{r.d(a,{f:()=>n});var c=r(262),u=r(2843),e=r(1223),o=r(520);let n=(()=>{class s{constructor(t){this.http=t,this.url="https://jsonplaceholder.typicode.com/users"}getUsers(){return this.http.get(this.url).pipe((0,c.K)(t=>this.handleError(t)))}sendUser(t){return this.http.post(this.url,t)}handleError(t){return 0===t.status?console.error("An Error Occurred:",t.error):console.error(`Service Returned Code: ${t.status}, Body Was:`,t.error),(0,u._)("Something happened; please Try Again Later.")}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(o.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2843:(l,a,r)=>{r.d(a,{_:()=>e});var c=r(8306),u=r(576);function e(o,n){const s=(0,u.m)(o)?o:()=>o,_=t=>t.error(s());return new c.y(n?t=>n.schedule(_,0,t):_)}}}]);