<template>
  <main class="live-container">
    <div
      v-for="(dateGroup, groupHeader) in groupedDates"
      class="live-group"
    >
      <div class="live-group-header">
        {{ groupHeader }}
      </div>

      <div
        v-for="group in dateGroup"
        class="live-date-group"
      >
        <div v-for="(shows, dateHeader) in group">
          <div class="live-date-header">
            {{ dateHeader }}
          </div>

          <div
            v-for="show in shows"
            class="live-date-entry"
          >
            <span class="live-entry-date">
              {{ $date(show.date).format('DD MMM YYYY') }} -
            </span>
            <span class="live-entry-venue">
              {{ show.venue }} - {{ show.location }}
            </span>
            <span v-if="show.info" class="live-entry-lineup">
              - {{ show.info }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JsonData from '@/components/JsonData.vue';

export default {
  mixins: [JsonData],

  data() {
    return {
      groupedDates: {},
    };
  },

  mounted() {
    setTimeout(() => {
      const tmp = {};

      this.liveData.forEach((i) => {
        const date = this.$date(i.date);
        const group = (date > this.$date()) ? 'Upcoming' : 'Previous';
        const year = date.format('YYYY');

        if (!tmp[group]) {
          tmp[group] = {};
        }
        if (!tmp[group][year]) {
          tmp[group][year] = [];
        }
        tmp[group][year].push(i);
      });

      this.groupedDates['Upcoming'] = [tmp['Upcoming']];
      this.groupedDates['Previous'] = [];

      const sortArr = Object.keys(tmp['Previous']).sort().reverse();
      sortArr.forEach((i) => {
        this.groupedDates['Previous'].push({ [i]: tmp['Previous'][i] });
      });
    }, 10);
  },
};
</script>

<style lang="less" scoped>
.live-container {
  max-width: 1280px;
  margin: auto;

  .live-group {
    &:not(:last-child) {
      padding-bottom: 25px;
      border-bottom: 3px solid white;
      margin-bottom: 40px;
    }

    .live-group-header {
      padding-bottom: 25px;
      font-size: 2rem;
      font-weight: bold;
      color: white;
    }

    .live-date-group {
      margin-bottom: 25px;

      .live-date-header {
        padding-left: 5px;
        padding-bottom: 5px;
        border-bottom: 2px solid grey;
        font-size: 1.5rem;
        font-weight: bold;
      }

      .live-date-entry {
        background-color: fade(black, 50%);
        color: white;
        font-size: 1.1rem;
        padding: 10px 15px;
        border-bottom: 1px dotted grey;
        &:last-child {
          border-bottom: 2px solid grey;
        }
      }
    }
  }
}

@media (width <= 600px) {
  .live-container {
    .live-group {
      .live-date-group {
        .live-date-entry {
          padding: 10px;
        }
      }
    }
  }
}
</style>
