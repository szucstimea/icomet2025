<template>
    <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <TimelineItem year="1971" place="Cambbridge, UK" organizer="Anthony Callear"></TimelineItem>
        <TimelineItem year="1975" place="Loccum, Germany" organizer="Peter Toennies"></TimelineItem>
        <TimelineItem year="1979" place="Rodez, France" organizer="Magdeleine Huetz-Aubert"></TimelineItem>
        <TimelineItem year="1983" place="Cirencester, UK" organizer="Anthony McCaffery"></TimelineItem>
        <TimelineItem year="1987" place="Emmetten, Switzerland" organizer="	Martin Quack"></TimelineItem>
        <TimelineItem year="1991" place="Nijmegen, Netherlands" organizer="	Jörg Reuss"></TimelineItem>
        <TimelineItem year="1995" place="Kloster Banz, GermanyLoccum, Germany" organizer="	Hans-Joachim Werner and Peter Andresen"></TimelineItem>
        <TimelineItem year="1999" place="Assisi, Italy" organizer="Antonio Laganà and Piergiorgio Casavecchia"></TimelineItem>
        <TimelineItem year="2003" place="San Lorenzo de El Escorial, Spain" organizer="Javier Aoiz, Luis Bañares and Miguel González"></TimelineItem>
        <TimelineItem year="2007" place="Arcachon, France" organizer="Michel Costes and Jean-Claude Rayez"></TimelineItem>
        <TimelineItem year="2011" place="Oxford, UK" organizer="Mark Brouard"></TimelineItem>
        <TimelineItem year="2015" place="Chengdu, China" organizer="Aart Kleyn and Xueming Yang"></TimelineItem>
        <TimelineItem year="2017" place="Innsbruck, Austria" organizer="Roland Wester, Alec Wodtke"></TimelineItem>
        <TimelineItem year="2019" place="Hefei, China" organizer="Xingan Wang and Xueming Yang"></TimelineItem>
        <TimelineItem year="2023" place="Jaipur, India" organizer="Upakarasamy Lourderaj"></TimelineItem>
    </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue';
export default{
  components:{
    TimelineItem
  },
  data(){
    return{

    };
  }
}
</script>