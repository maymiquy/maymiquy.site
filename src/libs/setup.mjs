import { config } from "dotenv";
import path from "path";
import personalDataJson from '../utils/constants/personal-data.json' assert { type: "json" };

const data = {
    description: "",
    githubUsername: "",
    avatarUrl: "",
    displayName: "",
    email: "",
    socials: {},
};


(async () => {
    config({ path: path.join(process.cwd(), ".env") });
    if (!process.env.GH_TOKEN) {
        throw new Error('Please set environtment variable GH_TOKEN');
    }

    console.log('⚙️  Reverting personal data');
    const dataPath = path.join(process.cwd(), 'data.json');
    const newData = { ...personalDataJson, ...data };
    await fs.writeFile(dataPath, JSON.stringify(newData, null, 4));
    console.log('⚙️  Reverting personal data');
})();