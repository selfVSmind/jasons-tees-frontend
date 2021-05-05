import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe('(max-width: 1300px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'A Note About Ebay', cols: 3, rows: 1,
                    content: `This app requires that your Ebay account be set up to use <a href="https://www.ebay.com/help/policies/business-policy/business-policies?id=4212">Ebay business policies</a>.
                    <br><br>
                    I plan to make this process automated in the future, but for now you will need to manually create three business policies on your account if you expect Jason's Tees to work.
                    <br><br>
                    To be brutally frank, I don't expect anyone but me to use this feature, so it isn't the end of the world. I just want to explain how to use it in case a potential employer wants to give my program a test run.` },
          { title: 'Required Policies', cols: 3, rows: 1,
                    content: `There are three types of business policies and you will need to make one of each. These are the names of the policies.
                    <br><br>
                    Payment:<br>TSHIRT_INVENTORY_MANAGER_PAYMENT_POLICY<br><br>
                    Returns:<br>TSHIRT_INVENTORY_MANAGER_RETURN_POLICY<br><br>
                    Shipping:<br>TSHIRT_INVENTORY_MANAGER_SHIPPING_POLICY` },
          { title: 'Contents Of The Policies', cols: 3, rows: 1,
                    content: `It's up to you how you set up the policies, they just have to exist and make sense for your account. I recommend using first class shipping for the shipping policy, because t-shirts aren't heavy.
                    <br><br>
                    If you run into any issues, please let me know at <a href="mailto:jason@jasonlambert.io">jason@jasonlambert.io</a>.` },
        ];
      }

      return [
          { title: 'A Note About Ebay', cols: 1, rows: 1,
                    content: `This app requires that your Ebay account be set up to use <a href="https://www.ebay.com/help/policies/business-policy/business-policies?id=4212">Ebay business policies</a>.
                    <br><br>
                    I plan to make this process automated in the future, but for now you will need to manually create three business policies on your account if you expect Jason's Tees to work.
                    <br><br>
                    To be brutally frank, I don't expect anyone but me to use this feature, so it isn't the end of the world. I just want to explain how to use it in case a potential employer wants to give my program a test run.` },
          { title: 'Required Policies', cols: 1, rows: 1,
                    content: `There are three types of business policies and you will need to make one of each. These are the names of the policies.
                    <br><br>
                    Payment:<br>TSHIRT_INVENTORY_MANAGER_PAYMENT_POLICY<br><br>
                    Returns:<br>TSHIRT_INVENTORY_MANAGER_RETURN_POLICY<br><br>
                    Shipping:<br>TSHIRT_INVENTORY_MANAGER_SHIPPING_POLICY` },
          { title: 'Contents Of The Policies', cols: 1, rows: 1,
                    content: `It's up to you how you set up the policies, they just have to exist and make sense for your account. I recommend using first class shipping for the shipping policy, because t-shirts aren't heavy.
                    <br><br>
                    If you run into any issues, please let me know at <a href="mailto:jason@jasonlambert.io">jason@jasonlambert.io</a>.` },
      ];
    })
  );

  checkIfEbayConnectedUrl = 'https://t-shirts.jasonlambert.io/checkEbay';
  ebayConnected = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient
  ) {
    this.http.get(this.checkIfEbayConnectedUrl).toPromise()
    .then(jsonData => {
      if(jsonData.hasOwnProperty('ebayConnected')) {
        this.ebayConnected = jsonData['ebayConnected'];
      }
    });
  }
}
