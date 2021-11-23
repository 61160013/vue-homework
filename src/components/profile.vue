<template>
  <b class="text-5xl">Protfolio</b>
  <div class="my-5" v-for="pf in profiles" :key="pf.id">
    <div class="box-content h-30 w-30 p-4 border-4 border-blue-400">
      <div class="my-5 h-30">
        <b>Profile</b><br /><br />
        <img class="center" :src="pf.img" width="100" />
        <br /><br />
        <div>
          <h1><b>Name : </b>{{ pf.first_name }} {{ pf.last_name }}</h1>
          <h1><b>Birthday : </b>{{ pf.birth_date }}</h1>
          <h1><b>Position : </b>{{ pf.position }}</h1>
        </div>
      </div>

      <div class="my-5">
        <b>About me</b>
        <div class="pl-5">
          <p>{{ pf.overview }}</p>
        </div>
      </div>

      <div class="my-5">
        <b>EDUCATION</b>
        <div
          class="grid grid-cols-4 pl-5"
          v-for="ed in pf.educations"
          :key="ed.id"
        >
          <div>
            <b>{{ ed.s_year }} - {{ ed.e_year }}</b>
          </div>
          <div class="col-span-3">
            <ul>
              <li>
                <b>{{ ed.name }}, {{ ed.province }} {{ ed.postcode }}</b>
              </li>
              <li>
                <p>{{ ed.level }} (GPA {{ ed.GPA }})</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="my-5">
        <b>SKILL</b>
        <div class="grid grid-cols-2 pl-5">
          <div v-for="(value, name, index) in pf.skills">
            <b v-if="index === 0">Computer Languages</b>
            <b v-if="index === 1">Software & Tool</b>
            <b v-if="index === 2">Cloud Service</b>
            <ul class="pl-5" v-for="item in value">
              <li><b>> </b>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
  <div class="grid justify-items-center">
    <router-link
      :to="{
        name: 'contact',
      }"
    >
      <button class="bg-black text-white font-bold py-2 px-4 rounded">
        View Contact
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    profiles: [
      {
        id: 1,
        first_name: 'Nonpawit',
        last_name: 'Eakpanja',
        img: 'https://reg.buu.ac.th/registrar/getstudentimage.asp?id=61160013',
        birth_date: '07/07/1999',
        position: 'Cloud and System Engineering',
        overview:
          'I am fresher seeking to develop my skills in corporate field I am a nice and friendly person I am honest and punctual, I have good listening and communication skills. I have a creative mind and am always up for new challenges..',
        educations: [
          {
            id: 1,
            level:
              'B.Sc. (Information Tehnology) - in progress Faculty of Informatics',
            name: 'Burapha University',
            province: 'ChonBuri',
            postcode: '20130',
            s_year: 2018,
            e_year: 'Present',
            GPA: 2.59,
          },
          {
            id: 2,
            level: 'High School Certificat',
            name: 'Trattrakarnkhun School',
            province: 'Trat',
            postcode: '23000',
            s_year: 2012,
            e_year: 2017,
            GPA: 2.79,
          },
        ],
        skills: {
          com_lang: [
            'JavaScript',
            'MySQL',
            'HTML',
            'Java',
            'PHP',
            'CSS',
            'Pyhon',
          ],
          software: [
            'XAMPP Control Panel',
            'MobaXterm',
            'Oracle VM VirtualBox',
            'MySQL Workbench',
            'Visual Studio Code',
            'Winscp',
            'Github',
            'Putty',
          ],
          Cloud_Service: ['Huawei Cloud', 'AWS'],
        },
      },
    ],
  }),
};
</script>
