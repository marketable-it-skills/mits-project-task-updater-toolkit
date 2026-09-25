## **<u>WORKSTATION FAMILIARISATION FORM</u>** 

# **WSC2026 Shanghai Competitor Familiarisation Day Checklist** 

**Competitor Country Code   _____** 

### **Competitor Workstation Number   _____** 

### **Competitor Framework(s)** 

|● React|● Vue|● Vanilla|● Angular|● Next|
|---|---|---|---|---|
|● Laravel|● Yii|● CodeIgniter|● Express.js|● Nuxt|

During the familiarisation day, competitors **<u>must check their workstation software, hardware and connectivity</u>** according to the provided list. Competitors **should check the items they intend to use** , **not** all of them (e.g. if you do not use Yii, there is no point in checking the deployment). Competitors can install optional software from the URL provided. 

**NOTE**<sup>**1**</sup> **:** **_Competitors should not start working on their test project during the familiarisation day. At the end of familiarisation day, all workstations will be reset and any repo that you created will be removed._** 

##### **IDE** 

- PHPStorm 

   - MySQL Database Connection Driver 

- VSCode (including extensions) 

- Eclipse 

- SublimeText 

##### **Software** 

- Firefox (including extensions) 

- Chrome (including extensions) 

- Devdocs (Provided Documentation) 

- Postman (Light version) 

- Bruno 

- FileZilla 

- WinSCP 

- PUTTY 

- MySQL Workbench 

- Gimp 

- Git 

- Apache 

- MySQL (MariaDB) 

- NVDA 

- NPM Packages 

   - Bootstrap 

## **<u>WORKSTATION FAMILIARISATION FORM</u>** 

   - Cypress 

   - Testcafe 

   - JQuery 

   - Tailwind 

- Composer Packages 

   - PHPUnit 

- CDN versions of Bootstrap, Tailwind, jQuery 

##### **Connectivity** 

- Access to **your work** via a browser: _<competitor-slug>-<subdomain>.ws2026.skill17.com_ according to the link in the **competitor dashboard** 

- **MariaDB** & **phpMyAdmin** is working on server: _pma.ws2026.skill17.com_ (use your username and password) 

- Database connection is functional 

- <u>Your choice of framework can be installed and is functional</u> 

##### **Deployment Platform** 

- Show container errors/logs 

- <u>Your choice of framework is functional after deployment</u> 

##### **Validators** 

- nu.ws2026.skill17.com 

- validator.ws2026.skill17.com 

##### **Keyboard** 

- Custom shortcuts 

- Keyboard layout (for non US/UK standards) 

##### **Other** 

- Mouse 

- Music headset 

- Music copied and available on **music.ws2026.skill17.com** 

## **<u>WORKSTATION FAMILIARISATION FORM</u>** 

##### **Comments:** 

**Competitor Signature of Check Completion:** _______________________________________________ 

**<u>WORKSTATION FAMILIARISATION FORM</u>** 

## **Development Workflow** 

#### **<u>Documentation</u>** 

- The documentation is available in your chosen browser as **devdocs.ws2026.skill17.com** and **docs.ws2026.skill17.com** 

- The documentation is also available as ZealDocs stand alone application 

#### **<u>Project Deployment</u>** 

- Go to the competitor dashboard and create a new repository by clicking on "New Repository” 

- Then choose your framework and provide a name for the repository and the subdomain. Normally you would choose the module name. 

- Clone the new repository by using the second icon (that includes the credentials already) 

- Create the .env file based on .env.example 

- Change the credentials in the .env to match the desired 

- Develop locally using your tools of choice 

- Commit your changes once in a while using: git commit -a -m “<commit message>” 

- Push your changes to the server: git push 

- After successful deployment view your changes by following the link "Work URL” on the competitor dashboard 

## **<u>WORKSTATION FAMILIARISATION FORM</u>** 

#### **<u>Database</u>** 

You have multiple options to use a database: 

- Use the online database, which is the one, that will be marked 

- Use the provided mysql server within the local websystem 

- Use mysql in docker 

**Note:** if you use the local websystem, you need to change the port of you development server from 80 to 8081 

#### **<u>Prisma</u>** 

- Generate client: npx prisma generate 

##### **<u>Nuxt</u>** 

- npm install --legacy-peer-deps
