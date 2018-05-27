## Rest-wrapper-PS4
Rest wrapper for talk with ps4.

**Warning**: no authentication is performed. Don't expose this service to outside network.

### Prerequisites

* Install ps4-waker with command `npm install -g ps4-waker`
* Generate the credentials file
	* Run command `ps4-waker -c ps4-creds.json` in the folder of your choice.
	* Run scan in playstation second screen app 
	* Connect on ps4-waker
	* On your PS4 go to settings and settings of application mobile connection
	* Select add device and enter the code on ssh terminal for ps4-waker
* Edit the config.js file 
* Run the server with command `pm2 start server.js --name ps4-wrapper` or `node server.js`

### Routes

`GET /ps4/power/state=value`

The value can take 0 for turn off or 1 for turn on ps4.

`GET /ps4/start/titleID`

In addition, the Title ID can be discovered when viewing a game on the PSN Store by looking at the URL in your browser's address bar. For example, the URL for GTAV in the UK is:

[https://store.playstation.com/#!/en-gb/games/grand-theft-auto-v/cid=EP1004-CUSA00411_00-GTAVDIGITALDOWNL](https://store.playstation.com/#!/en-gb/games/grand-theft-auto-v/cid=EP1004-CUSA00411_00-GTAVDIGITALDOWNL)

So, its Title ID is  `CUSA00411`

Netflix fr : `CUSA00127`
GTA fr: `CUSA00411`
NFS Payback fr: `CUSA05986`
COD BO3 fr: `NPEB02266`
COD WWII fr: `CUSA08630`
Minecraft fr: `CUSA00265`
Fornite fr: `CUSA07669`