import React, { FC } from 'react';
import HTML from './HTML/HTML';
import classes from './IndexHTML.module.scss';

interface IndexHTMLProps {}

const IndexHTML: FC<IndexHTMLProps> = () => {
  return (
    <div className={classes.IndexHTML}>
      <HTML tagName="" isDOCTYPE={true} />
      <HTML tagName="html" attributes={[{ name: 'lang', value: 'en' }]}>
        <HTML className="indent" tagName="head">
          <HTML
            className="indent"
            isSelfClosing={true}
            tagName="meta"
            attributes={[{ name: 'charset', value: 'utf-8' }]}
          />
          <HTML
            isSelfClosing={true}
            tagName="link"
            attributes={[
              { name: 'rel', value: 'icon' },
              { name: 'href', value: '%PUBLIC_URL%/favicon.ico' },
            ]}
            className="indent"
          />
          <HTML
            isSelfClosing={true}
            tagName="meta"
            attributes={[
              { name: 'name', value: 'viewport' },
              { name: 'content', value: 'width=device-width, initial-scale=1' },
            ]}
            className="indent"
          />
          <HTML
            isSelfClosing={true}
            tagName="meta"
            attributes={[{ name: 'theme-color', value: '#000000' }]}
            className="indent"
          />
          <HTML
            isSelfClosing={true}
            tagName="meta"
            attributes={[{ name: 'description', value: 'Web site created using create-react-app' }]}
            className="indent"
          />
          <HTML
            isSelfClosing={true}
            tagName="link"
            attributes={[
              { name: 'rel', value: 'apple-touch-icon' },
              { name: 'href', value: '%PUBLIC_URL%/logo192.png' },
            ]}
            className="indent"
          />
          <HTML isComment={true} className="indent" tagName="">
            <div className="indent">
              manifest.json provides metadata used when your web app is installed on a user's mobile
              device or desktop. See
              https://developers.google.com/web/fundamentals/web-app-manifest/
            </div>
          </HTML>
          <HTML
            isSelfClosing={true}
            tagName="link"
            attributes={[
              { name: 'rel', value: 'manifest' },
              { name: 'href', value: '%PUBLIC_URL%/manifest.json' },
            ]}
            className="indent"
          />
          <HTML className="indent" isComment={true} tagName="">
            <div className="indent">
              Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of
              the `public` folder during the build. Only files inside the `public` folder can be
              referenced from the HTML. Unlike "/favicon.ico" or "favicon.ico",
              "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a
              non-root public URL. Learn how to configure a non-root public URL by running `npm run
              build`.
            </div>
          </HTML>
          <HTML tagName="title" className="indent">
            React App
          </HTML>
        </HTML>
        <HTML className="indent" tagName="body">
          <HTML tagName="noscript" className="indent">
            You need to enable JavaScript to run this app.
          </HTML>
          <HTML className="indent" tagName="div" attributes={[{ name: 'id', value: 'root' }]}>
            <HTML isComment={true} tagName="">
              <div className="indent">
                This HTML file is a template. If you open it directly in the browser, you will see
                an empty page. You can add webfonts, meta tags, or analytics to this file. The build
                step will place the bundled scripts into the &lt;body&gt; tag. To begin the
                development, run `npm start` or `yarn start`. To create a production bundle, use
                `npm run build` or `yarn build`.
              </div>
            </HTML>
          </HTML>
        </HTML>
      </HTML>
    </div>
  );
};

export default IndexHTML;
