import { Component, OnInit } from '@angular/core';
import { Info } from '@rogers/cdk/assembled/info';
import { Parallax } from '@rogers/cdk/assembled/parallax';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  banners: Array<Info>;
  images: Array<Parallax>;
  constructor() {
    
    this.images = [
      {
        src:
          'assets/para5.jpeg',
        alt: 'Parallax image greenhouse',
        mobileSrc:
          'assets/para.jpeg',
          height: 100,
          heightSm: 200,
          heightMd: 400,
          heightLg: 600,
      },
      {
        src:
          'assets/para6.jpeg',
        alt: 'Parallax image rain',
        height: 100,
        heightSm: 200,
        heightMd: 400,
        heightLg: 600,
      },
      {
        src:
          'assets/para7.jpeg',
        alt: 'Parallax image yacht',
        height: 100,
        heightSm: 200,
        heightMd: 400,
        heightLg: 600,
      },
      {
        src:
          'assets/para8.jpeg',
        alt: 'Parallax image plant',
        height: 100,
        heightSm: 200,
        heightMd: 400,
        heightLg: 600,
      },
    ];
    
    this.banners = [
      {
        image: {
          src:
            'https://images.ctfassets.net/2v2b28hn7ahz/tl8CBdByW14DtKvR7WpJc/d06b4e667a3122d27c33c75651cdd002/lifestyle-hands-up.jpg',
          alt: 'Leads Gen',
        },
        copy: {
          header: 'Lorem ipsum',
          body: 'Lorem ipsum',
        },
        cta: {
          copy: 'Lorem',
          val: '/contact-us',
          alt: 'Contact Uss',
        },
      },
      {
        image: {
          src:
            'https://images.ctfassets.net/2v2b28hn7ahz/158bf0SNqFV8JeRQbO5jET/d939d804fe30593610c5f1783d58c494/mail.svg',
          alt: 'Leads Gen',
        },
        copy: {
          header: 'Lorem ipsum',
          body: 'Lorem ipsum',
        },
        cta: {
          copy: 'Lorem',
          val: '/contact-us',
          href: 'https://www.rogers.com/consumer/home',
          target: '_blank',
        },
        isImageIcon: true,
      },
      {
        backgroundColor: 'misty',
        copy: {
          header: 'Lorem ipsum dolor sit amet consecte',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        },
        cta: {
          copy: 'Lorem ipsum doloras',
          val: '/contact-us',
          alt: 'Contact Us',
          variant: 'tertiary',
          icon: 'edit',
        },
      },
      {
        image: {
          src:
            'https://images.ctfassets.net/2v2b28hn7ahz/tl8CBdByW14DtKvR7WpJc/d06b4e667a3122d27c33c75651cdd002/lifestyle-hands-up.jpg',
          alt: 'Leads Gen',
        },
        copy: {
          header: 'Lorem ipsum dolor sit amet consecte',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
          icon: 'avatar',
        },
        cta: {
          copy: 'Lorem ipsum doloras',
          val: '/contact-us',
          alt: 'Contact Us',
        },
        showMobileImage: false,
      },
    ];
  }

  ngOnInit(): void {
  }

}
