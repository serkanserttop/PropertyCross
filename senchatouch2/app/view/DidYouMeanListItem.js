Ext.define('PropertyFinder.view.DidYouMeanListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'didyoumeanlistitem',
    
    
    config: {
        layout: 'hbox',
        padding: 10,
        border: 1,
        cls: 'searcheslistitem',
        
        dataMap: {
            getLongTitle: {
                setHtml: 'long_title'
            }
        },
        
        items: [
            {
                itemId: 'placeName',
                style: 'font-size: 18px',
                flex: 1
            }
        ]
    },
    
    getLongTitle: function() {
        return this.down('#placeName');
    }
});