

function HeadPage() {

  return (
    <div id='head_content'>
      <section className='banner'>
        <img src={require('../assets/banner01.png').default} alt="" />
      </section>

      <div className='center'>
        {/* 案例展示 */}
        <section className='case_display'>
          <div className='title'>
            <span>案例展示</span>
            <span>CASE DISPLAY</span>
          </div>
          <div className='case_content'>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>东周国际营销中心</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>衡山民宿酒店</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>湖南恒茂</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>蓝色光标</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>轻悦健康管理</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>鑫政集团</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>壹号土菜研究院</span>
              </div>
            </div>
            <div className='case_col'>
              <img src={require('../assets/banner01.png').default} alt="" />
              <div className='mask'>
                <span>浙江美之源</span>
              </div>
            </div>
          </div>
        </section>
        {/* 关于我们 */}
        <section id='about_us'>
          <div className='title'>
            <span>关于我们</span>
            <span>ABOUT US</span>
          </div>
          <div className='about_us_content'>
            <span>
              湖南领业建筑装饰工程有限公司作为工装品牌装饰企业，
              领业装饰以雄厚的设计力 量，精良的施工团队及工艺，
              完善的售后服务，和诚信经营的态度深受广大客户的 信赖。
              公司主营项目有建筑装饰装修、室内空间设计、空调工程、消防工程、办公家具及
              材料销售。领业装饰工程项目遍布湖南各地，施工质量的一次验收合格率100%，
              优 良率98%，领业装饰通过多方面、系统化、科技化、全面提升设计师、
              工程人员和售 后服务人员服务水平，着眼成为湖南工装行业的领军行业。
              领业装饰一直以质量第一、诚信为本的原则在工程装修设计、施工方面追求
              国际领军行业水准，致力于为客户提供高端设计、高性价比的产品材料、装修一体
              化等一条龙的综合服务；逐步构筑专业化、规模化的现代装饰品牌企业。
            </span>
            <div>
              <img src={require('../assets/banner01.png').default} alt="" />
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
export default HeadPage;