<script setup lang="ts">
const cards = ref([
  {
    title: 'ผปว.กบฟ.',
    description: 'การปฏิบัติงานด้านบัญชีและการเงินภายในองค์กรและใช้ T-Code ต่างๆ เพื่อดำเนินการในระบบเช่น การตั้งหนี้, การกลับรายการเอกสาร, การเคลียร์เงินยืมพนักงาน, และการจัดการเช็คโดยมี ผปว.(แผนกประมวลผลและวิเคราะห์บัญชี)เป็นหน่วยงานหลักที่รับผิดชอบ',
    icon: 'arcticons:debtcalc',
    to: 'https://qr.pea.co.th/ODc4YzRkM',
    src: 'images/account.png',
  },
  {
    title: 'กบพ.',
    description: 'ข้อมูลด้านการบริหารพัสดุ\nข้อมูลจัดซื้อจัดจ้างและการบริหารพัสดุ\nTcode ที่เกี่ยวข้อง\nระเบียบการจัดซื้อจัดจ้าง',
    icon: 'healthicons:rdt-result-out-stock',
    to: 'https://qr.pea.co.th/ZjAxM2Q5O',
    src: 'images/warehouse.png',
  },
  {
    title: 'ผขฟ.กบฟ.',
    description: `การประมวลผลบิลค่าไฟฟ้า\nการปรับปรุงค่าไฟฟ้ากรณีมิเตอร์ชำรุด/ละเมิด\nการจัดทำสัญญาซื้อขายไฟฟ้า\nการจัดเก็บและทบทวนเงินประกันการใช้ไฟฟ้า\nการกำหนดอัตราค่าไฟฟ้าและประเภทกิจการ`,
    icon: 'material-symbols:article-person-outline',
    to: 'https://qr.pea.co.th/MTJiY2UyO',
    src: 'images/electricity-bill.png'
  },
  {
    title: 'ผสซ.ฝสบ.',
    description: 'ข้อมูลการแก้ไข error จากระบบ scs/ics\nข้อมูล TSIC \nปัญหาการใช้งานระบบต่างๆ เช่น eems mgmt',
    icon: 'streamline-pixel:computers-devices-electronics-desktop',
    to: 'https://qr.pea.co.th/YzBlNzA0Z',
    src: 'images/computer-graphic.png'
  }
])

</script>


<template>
  <div>
    <UPageSection
      id="features"
      title="CHATBOT ฝสบ.กฟน3"
      icon="tabler:message-chatbot"
      description="`นายเมธี บุญพรหม ผชก.(น3) ผลักดันให้นำเทคโนโลยี AI มาใช้งานในหน่วยงาน กฟน.3 โดยมี นายธรรมนูญ สุวรรณพฤกษ์ อฝ.สบ.ได้ดำเนินการตามนโยบาย โดยมีการจัดทำ Chatbot เพื่อนำมาอำนวยความสะดวกให้กับพนักงานในการตอบปัญหางานในส่วนต่าง`"
    >
    <UPageGrid>
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
      highlight
      highlight-color="primary"
      class="pre-formatted"
    >
     <img :src="card.src" class="mx-auto size-25" />
    </UPageCard>
    </UPageGrid>
  </UPageSection>
    <!-- <UPageSection
      id="features"
      title="CHATBOT ฝสบ.กฟน3"
      description="นาย เมธี บุญพรหม ผชก.(น3) ผลักดันให้นำเทคโนโลยี AI มาใช้งานในหน่วยงาน กฟน.3 โดยมี นายธรรมนูญ สุวรรณพฤกษ์ อฝ.สบ. ได้ดำเนินการตามนโยบาย โดยมีการจัดทำ Chatbot เพื่อนำมาอำนวยความสะดวกให้กับพนักงานในการตอบปัญหางานในส่วนต่าง"
      :features="[{
        icon: 'i-lucide-palette',
        title: 'Production-ready from day one',
        description: 'Pre-configured with TypeScript, ESLint, Tailwind CSS, and all the best practices. Focus on building features, not setting up tooling.'
      }, {
        icon: 'i-lucide-palette',
        title: 'Beautiful by default',
        description: 'Leveraging Nuxt UI\'s design system with automatic dark mode, consistent spacing, and polished components that look great out of the box.'
      }, {
        icon: 'i-lucide-zap',
        title: 'Lightning fast',
        description: 'Optimized for performance with SSR/SSG support, automatic code splitting, and edge-ready deployment. Your users will love the speed.'
      }, {
        icon: 'i-lucide-blocks',
        title: '100+ components included',
        description: 'Access Nuxt UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'
      }, {
        icon: 'i-lucide-code-2',
        title: 'Developer experience first',
        description: 'Auto-imports, hot module replacement, and TypeScript support. Write less boilerplate and ship more features.'
      }, {
        icon: 'i-lucide-shield-check',
        title: 'Built for scale',
        description: 'Enterprise-ready architecture with proper error handling, SEO optimization, and security best practices built-in.'
      }]"
    /> -->
  </div>
</template>


<style>

.pre-formatted {
  white-space: pre;
}
</style>
